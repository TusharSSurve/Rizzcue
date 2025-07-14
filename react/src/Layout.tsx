import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import { Outlet } from "react-router";
import type { ColorTheme } from "./lib/types";

type TLayoutProps = {
  onShare: () => void;
  onSave: () => void;
  theme: ColorTheme;
};

export default function Layout({ theme, onSave, onShare }: TLayoutProps) {
  return (
    <div className="min-h-screen transition-all duration-300" style={{ backgroundColor: theme.cardBackground }}>
      <Header theme={theme} />
      <main>
        <Outlet />
      </main>
      <Footer theme={theme} onSave={onSave} onShare={onShare}/>
    </div>
  )
}
