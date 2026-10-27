import Header from '@/components/layout/Header/Header.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';
import FloatingActions from '@/components/layout/FloatingActions/FloatingActions.jsx';

// The shell every page shares. Pages only supply what goes inside <main>.
export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
