import type { APIProps } from "../../lib/types";

type TCardProps = {
  card: APIProps;
};

export default function Card({ card }: TCardProps) {
  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold leading-relaxed mb-3">
          {card.line1}
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          {card.line2}
        </p>
      </div>
      <div className="absolute bottom-4 right-8 flex items-center gap-2">
        <span className="text-sm opacity-75">❤️ {card.likes}</span>
      </div>
    </>
  )
}
