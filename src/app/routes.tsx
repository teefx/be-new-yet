import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./components/HomePage";
import ConferencePage from "./components/ConferencePage";
import AdminPage from "./components/AdminPage";
import YetPopup from "./components/YetPopup";
import GivePage from "./components/GivePage";
import WorshipCentresPage from "./components/WorshipCentresPage";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { LiquidButton } from "./components/ui/liquid-button";

function Root() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .btn-liquid {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .btn-liquid::before,
        .btn-liquid::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          width: 250%;
          aspect-ratio: 1;
          background-color: var(--liquid-button-background-color, white);
          z-index: -1;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-liquid::before {
          border-radius: 40%;
          transform: translate(-50%, 0) rotate(0deg);
        }
        .btn-liquid::after {
          border-radius: 45%;
          transform: translate(-50%, 0) rotate(0deg);
          opacity: 0.5;
        }
        .btn-liquid:hover:not(:disabled)::before {
          transform: translate(-50%, -85%) rotate(180deg);
        }
        .btn-liquid:hover:not(:disabled)::after {
          transform: translate(-50%, -85%) rotate(225deg);
        }
        .btn-liquid:hover:not(:disabled) {
          color: var(--liquid-button-color, black) !important;
        }
      `,
        }}
      />
      <Outlet />
    </>
  );
}

function HomeRoute() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      <HomePage />
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

function WorshipCentresRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return <WorshipCentresPage onHome={() => navigate("/")} />;
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
      <LiquidButton
        onClick={() => navigate("/")}
        className="inline-flex items-center justify-center px-[24px] h-[48px] rounded-full bg-[#ab00e4] text-white font-['Lato:Black',sans-serif] text-[12px] tracking-[3px] uppercase transition-colors border border-transparent"
        style={
          {
            "--liquid-button-background-color": "white",
            "--liquid-button-color": "#21002c",
          } as React.CSSProperties
        }
      >
        Back Home
      </LiquidButton>
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
      { path: "worship-centres", Component: WorshipCentresRoute },
      { path: "*", Component: NotFound },
    ],
  },
]);
