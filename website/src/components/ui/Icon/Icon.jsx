// Small stroke icons used across the site. Add new ones to `paths`.
const paths = {
  chevronDown: { box: 12, d: 'M3 4.5l3 3 3-3' },
  chevron: { box: 20, d: 'M4 7l6 6 6-6' },
  chevronRight: { box: 12, d: 'M4.5 3l3 3-3 3' },
  back: { box: 14, d: 'M12 7H2M6 3L2 7l4 4' },
  menu: { box: 24, d: 'M3 7h18M3 12h18M3 17h18' },
  menuClose: { box: 24, d: 'M6 6l12 12M18 6L6 18' },
  plus: { box: 16, d: 'M8 3v10M3 8h10' },
  user: { box: 18, d: 'M3 16c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5', circle: [9, 6, 3] },
  orders: { box: 18, d: 'M3 4h12v11H3zM3 8h12M7 4V2M11 4V2' },
  signOut: { box: 18, d: 'M7 3H3v12h4M11 5l4 4-4 4M15 9H7' },
  arrowSmall: { box: 16, d: 'M3 8h10M9 4l4 4-4 4' },
  search: { box: 20, d: 'M7.5 12.5L3 17', circle: [11.5, 8.5, 5.5] },
  close: { box: 18, d: 'M3 3l12 12M15 3L3 15' },
  send: { box: 22, d: 'M3 3l16 8-16 8 3-8-3-8zM6 11h13' },
  arrowLeft: { box: 20, d: 'M16 10H4M9 5l-5 5 5 5' },
  arrowRight: { box: 20, d: 'M4 10h12M11 5l5 5-5 5' },
  arrowUp: { box: 14, d: 'M7 12V2M3 6l4-4 4 4' },
  globe: { box: 20, d: 'M2 10h16M10 2c2.5 2.5 2.5 13.5 0 16M10 2c-2.5 2.5-2.5 13.5 0 16', circle: [10, 10, 8] },
};

export default function Icon({ name, size, strokeWidth = 1.6, d, box }) {
  const p = paths[name] ?? { box, d };
  return (
    <svg width={size ?? p.box} height={size ?? p.box} viewBox={`0 0 ${p.box} ${p.box}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
      {p.circle && <circle cx={p.circle[0]} cy={p.circle[1]} r={p.circle[2]} />}
      <path d={p.d} />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 3h2.5l2 10h9l1.5-7H5.5" />
      <circle cx="8" cy="16.5" r="1" />
      <circle cx="14.5" cy="16.5" r="1" />
    </svg>
  );
}
