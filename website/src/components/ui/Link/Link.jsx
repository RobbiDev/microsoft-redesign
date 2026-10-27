import { isExternal } from '@/data/site.js';

// An <a> that opens other sites in a new tab. Internal links are handled by the router.
export default function Link({ href, children, ...rest }) {
  const external = isExternal(href);
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...rest}>
      {children}
    </a>
  );
}
