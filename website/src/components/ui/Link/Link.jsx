import { withBase, withSiteBase } from '@/app/base.js';
import { isExternal } from '@/data/site.js';

// Every link in the app goes through here. Site paths get the app's base ('/store' → '/main/store'),
// other sites open in a new tab, and `outsideApp` links go to the domain as-is (e.g. '/' = all redesigns).
export default function Link({ href = '', outsideApp = false, children, ...rest }) {
  const external = isExternal(href);
  const to = external ? href : outsideApp ? withSiteBase(href) : withBase(href);
  return (
    <a href={to} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...rest}>
      {children}
    </a>
  );
}
