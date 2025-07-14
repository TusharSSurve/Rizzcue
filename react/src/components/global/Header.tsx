import type { ColorTheme } from "../../lib/types";

export default function Header({ theme }: { theme: ColorTheme }) {
  return (
    <header className="text-center py-5">
      <h2 className="text-white text-[1.5em] font-bold duration-250 text-shadow-3p drop-shadow"
      style={{ color: theme.text }}>Rizzcue</h2>
    </header>
  )
}
