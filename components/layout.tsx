import Header from './header';
import Meta from './meta';
import Footer from './footer';

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className='px-24 pt-8 flex flex-col min-h-screen'>
      <Meta />
      <Header />
      <main className='pb-12'>{children}</main>
      <Footer />
    </div>
  );
}