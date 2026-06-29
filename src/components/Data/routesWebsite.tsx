import Main from '@/components/Pages/MainPage';
import NotFound from '@/components/Pages/404NotFoundPage';
import About from '@/components/Pages/AboutPage';
import Services from '@/components/Pages/ServicesPage';
import Donate from '@/components/Pages/DonatePage';
import Payment from "@/components/Pages/Payment";

export const routes = [
  { path: '/', element: <Main /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/donate', element: <Donate /> },
  { path: '/payment', element: <Payment /> },
  { path: '*', element: <NotFound /> }
];