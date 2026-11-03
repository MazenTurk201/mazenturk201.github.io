
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Modules/navBar";
import Footer from "@/components/Modules/footerWedgit";
import { PageTransition } from "@/components/animate-ui/components/page-transition";

export default function Layout() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center">
      <NavBar />
        <PageTransition effect="iris" className="w-full flex-1 flex flex-col">

      <main className="w-full flex-1 flex flex-col">
          <Outlet />
      </main>

      <Footer />
        </PageTransition>
    </div>
  );
}
