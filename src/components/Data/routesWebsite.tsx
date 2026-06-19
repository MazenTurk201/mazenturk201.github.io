import Main from '@/components/Pages/MainPage';
import NotFound from '@/components/Pages/404NotFoundPage';
import About from '@/components/Pages/AboutPage';
import Services from '@/components/Pages/ServicesPage';
import Donate from '@/components/Pages/DonatePage';

export const routes = [
  { path: '/', element: <Main /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/donate', element: <Donate /> },
  { path: '*', element: <NotFound /> }
];