import { useEffect } from 'react';

const CLICK_SLOP_PX = 6; // a drag longer than this cancels the click that would follow it
const FRICTION = 0.94; // momentum kept each frame after release
const MIN_SPEED = 0.5; // px per frame where the glide stops

// Click-and-drag scrolling with a momentum glide, for mouse users on a horizontally scrolling element.
// Touch and trackpads already scroll it natively, so only mouse pointers are handled here.
// While dragging, `draggingClass` is added (use it to turn off scroll-snap and show a grabbing cursor).
export default function useDragScroll(ref, draggingClass) {
  useEffect(() => {
    const el = ref.current;
    let drag = null;
    let dragged = false;
    let frame = 0;

    const onDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      cancelAnimationFrame(frame);
      drag = { x: e.clientX, left: el.scrollLeft, lastX: e.clientX, lastT: e.timeStamp, v: 0 };
      dragged = false;
    };

    const onMove = (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!dragged) {
        if (Math.abs(dx) < CLICK_SLOP_PX) return;
        dragged = true;
        el.setPointerCapture(e.pointerId);
        el.classList.add(draggingClass);
      }
      const dt = e.timeStamp - drag.lastT;
      if (dt > 0) drag.v = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = e.timeStamp;
      el.scrollLeft = drag.left - dx;
    };

    const onUp = () => {
      if (!drag) return;
      let speed = -drag.v * 16; // px/ms → px per frame
      drag = null;
      if (!dragged) return;
      const glide = () => {
        el.scrollLeft += speed;
        speed *= FRICTION;
        if (Math.abs(speed) > MIN_SPEED) frame = requestAnimationFrame(glide);
        else el.classList.remove(draggingClass); // scroll-snap comes back and settles on a card
      };
      frame = requestAnimationFrame(glide);
    };

    // Swallow the click at the end of a drag so dragging across a card doesn't open its link.
    const onClick = (e) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('click', onClick, true);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, [ref, draggingClass]);
}
