import Header from './header';
import Meta from './meta';
import Footer from './footer';

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen bg-blog_bg_green'>
      <Meta />
      <Header />
      <div className='h-[250px] bg-blog_green'></div>
      <main className='p-12 lg:p-24 -mt-60'>
        <div className='bg-white rounded p-12 lg:p-24 drop-shadow-2xl'>{children}</div>
      </main>
      <Footer />
    </div>
  );
}