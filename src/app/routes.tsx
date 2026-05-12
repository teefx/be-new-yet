import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./components/HomePage";
import ConferencePage from "./components/ConferencePage";
import AdminPage from "./components/AdminPage";
import YetPopup from "./components/YetPopup";
import GivePage from "./components/GivePage";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Root() {
  return <Outlet />;
}

function HomeRoute() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <HomePage />
      <button
        onClick={() => navigate("/conference")}
        className="fixed bottom-[24px] right-[24px] z-50 px-[20px] h-[48px] rounded-full bg-[#ab00e4] text-white font-['Lato:Black',sans-serif] text-[11px] tracking-[3px] uppercase shadow-[0_8px_24px_rgba(171,0,228,0.4)] hover:bg-[#21002c] transition-colors"
      >
        YET Conference 2026 →
      </button>
      {showPopup && (
        <YetPopup
          onClose={() => setShowPopup(false)}
          onRegister={() => {
            setShowPopup(false);
            navigate("/conference");
          }}
        />
      )}
    </>
  );
}

function ConferenceRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return <ConferencePage onHome={() => navigate("/")} />;
}

function AdminRoute() {
  const navigate = useNavigate();
  return <AdminPage onHome={() => navigate("/")} />;
}

function GiveRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return <GivePage onHome={() => navigate("/")} />;
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#21002c] flex flex-col items-center justify-center text-center px-[40px]">
      <h1 className="font-['Anton:Regular',sans-serif] text-white text-[80px] uppercase leading-none mb-[12px]">
        404
      </h1>
      <p className="font-['Lato:Regular',sans-serif] text-white/70 text-[16px] mb-[24px]">
        That page doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center justify-center px-[24px] h-[48px] rounded-full bg-[#ab00e4] text-white font-['Lato:Black',sans-serif] text-[12px] tracking-[3px] uppercase hover:bg-white hover:text-[#21002c] transition-colors"
      >
        Back Home
      </button>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomeRoute },
      { path: "conference", Component: ConferenceRoute },
      { path: "admin", Component: AdminRoute },
      { path: "give", Component: GiveRoute },
      { path: "*", Component: NotFound },
    ],
  },
]);
