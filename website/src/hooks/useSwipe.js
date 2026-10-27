import { useRef } from 'react';

const AXIS_LOCK_PX = 8; // movement before deciding the gesture is horizontal (swipe) or vertical (page scroll)
const CLICK_SLOP_PX = 6; // a drag longer than this cancels the click that would follow it
const WHEEL_STEP = 50; // trackpad distance that counts as one swipe
const WHEEL_IDLE_MS = 160; // trackpad momentum must pause this long before another swipe counts

// Horizontal swipe for carousels: touch, mouse drag, and two-finger trackpad swipes.
// Spread the returned handlers onto the element that should catch the gesture.
//   onDrag(dx)          while dragging, with the distance from the start (0 when it ends)
//   onRelease(dx, v)    when a drag ends, with the distance and velocity (px/ms)
//   onStep(direction)   for a trackpad swipe: 1 = next, -1 = previous
export default function useSwipe({ onDrag, onRelease, onStep }) {
  const gesture = useRef(null);
  const dragged = useRef(false);
  const wheel = useRef({ sum: 0, last: 0, locked: false });

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    gesture.current = { id: e.pointerId, x: e.clientX, y: e.clientY, axis: null, lastX: e.clientX, lastT: e.timeStamp, v: 0 };
    dragged.current = false;
  };

  const onPointerMove = (e) => {
    const g = gesture.current;
    if (!g || e.pointerId !== g.id) return;
    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;
    if (!g.axis) {
      if (Math.abs(dx) < AXIS_LOCK_PX && Math.abs(dy) < AXIS_LOCK_PX) return;
      g.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (g.axis === 'y') {
        gesture.current = null; // let the page scroll
        return;
      }
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    const dt = e.timeStamp - g.lastT;
    if (dt > 0) g.v = (e.clientX - g.lastX) / dt;
    g.lastX = e.clientX;
    g.lastT = e.timeStamp;
    if (Math.abs(dx) > CLICK_SLOP_PX) dragged.current = true;
    onDrag(dx);
  };

  const end = (e) => {
    const g = gesture.current;
    if (!g || e.pointerId !== g.id) return;
    gesture.current = null;
    if (g.axis === 'x') {
      onDrag(0);
      onRelease(e.clientX - g.x, g.v);
    }
  };

  // Swallow the click at the end of a drag so dragging across a card doesn't open its link.
  const onClickCapture = (e) => {
    if (!dragged.current) return;
    e.preventDefault();
    e.stopPropagation();
    dragged.current = false;
  };

  const onWheel = (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    const w = wheel.current;
    const now = e.timeStamp;
    if (w.locked) {
      const stillMoving = now - w.last < WHEEL_IDLE_MS;
      w.last = now;
      if (stillMoving) return;
      w.locked = false;
    }
    if (now - w.last > 300) w.sum = 0;
    w.last = now;
    w.sum += e.deltaX;
    if (Math.abs(w.sum) >= WHEEL_STEP) {
      onStep(Math.sign(w.sum));
      w.sum = 0;
      w.locked = true;
    }
  };

  return { onPointerDown, onPointerMove, onPointerUp: end, onPointerCancel: end, onClickCapture, onWheel };
}
