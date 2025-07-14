import Card from "../components/global/Card";
import { initialCards } from "../lib/constants";
import type { ColorTheme } from "../lib/types";

type TButtonProps = {
  handleCardClick: () => void;
  theme: ColorTheme;
};

export default function Home({ theme, handleCardClick }: TButtonProps) {
  return (
    <div
      className="scrollable-wrapper"
      style={{ backgroundColor: theme.cardBackground }}>
      <div
        className="scrollable"
        style={{ backgroundColor: theme.cardBackground }}>
        {initialCards.map((card) => (
          <div key={card.id} className="card" style={{
          backgroundColor: theme.background,
          color: theme.text,
        }} onClick={handleCardClick}>
          <Card card={card}/>
        </div>
        ))}
      </div>
    </div>
  )
}
