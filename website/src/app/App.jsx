import { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout/PageLayout.jsx';
import HomePage from '@/pages/home/HomePage.jsx';
import StorePage from '@/pages/store/StorePage.jsx';
import Microsoft365Page from '@/pages/microsoft-365/Microsoft365Page.jsx';
import M365PlansPage from '@/pages/microsoft-365/M365PlansPage.jsx';
import BusinessPage from '@/pages/microsoft-365/BusinessPage.jsx';
import EnterprisePage from '@/pages/microsoft-365/EnterprisePage.jsx';
import EducationPage from '@/pages/microsoft-365/EducationPage.jsx';
import CopilotPage from '@/pages/microsoft-365/CopilotPage.jsx';
import AppsPage from '@/pages/microsoft-365/AppsPage.jsx';
import ResourcesPage from '@/pages/microsoft-365/ResourcesPage.jsx';
import GovernmentPage from '@/pages/microsoft-365/GovernmentPage.jsx';
import { m365Redirects } from '@/pages/microsoft-365/redirects.js';
import StillRedesigningPage from '@/pages/still-redesigning/StillRedesigningPage.jsx';
import { handleLinkClick, navigate, scrollToHash, usePathname } from './router.js';

// Pages that have been redesigned. Every other path shows "Still being redesigned".
const routes = {
  '/': HomePage,
  '/store': StorePage,
  '/microsoft-365': Microsoft365Page,
  '/microsoft-365/plans': M365PlansPage,
  '/microsoft-365/business': BusinessPage,
  '/microsoft-365/enterprise': EnterprisePage,
  '/microsoft-365/education': EducationPage,
  '/microsoft-365/copilot': CopilotPage,
  '/microsoft-365/apps': AppsPage,
  '/microsoft-365/resources': ResourcesPage,
  '/microsoft-365/government': GovernmentPage,
};

// Old paths that now live inside a condensed page.
const redirects = { ...m365Redirects };

export default function App() {
  const pathname = usePathname();
  const path = pathname.replace(/\/+$/, '') || '/';
  const Page = routes[path] ?? StillRedesigningPage;
  const redirectTo = redirects[path];

  useEffect(() => {
    if (redirectTo) navigate(redirectTo, { replace: true });
  }, [redirectTo]);

  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash); // deep links on first load
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  useEffect(() => {
    document.title = Page.title;
  }, [Page]);

  return (
    <PageLayout>
      <Page key={path} path={path} />
    </PageLayout>
  );
}
