import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MyNavbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ToastViewport from "../Toast/ToastViewport";

function Layout() {
  const { pathname } = useLocation();

  // با تغییر مسیر، صفحه به بالا اسکرول شود
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <MyNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* اعلان‌ها روی همهٔ صفحه‌ها، بیرون از <main> تا اسکرول را جابه‌جا نکند */}
      <ToastViewport />
    </div>
  );
}

export default Layout;
