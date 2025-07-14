import type { ColorTheme } from "../../lib/types";

type TFooterProps = {
  onShare: () => void;
  onSave: () => void;
  theme: ColorTheme;
};

export default function Footer({ theme, onSave, onShare }: TFooterProps) {
  return (
    <footer>
      <div className="buttons">
        <button
          className="button"
          style={{ backgroundColor: theme.background, color: theme.text }}>
          New
        </button>
        <button
          className="button"
          style={{ backgroundColor: theme.background, color: theme.text }}
          onClick={onSave}>
          Save
        </button>
        <button
          className="button"
          style={{ backgroundColor: theme.background, color: theme.text }}
          onClick={onShare}>
          Share
        </button>
      </div>
    </footer>
  )
}
