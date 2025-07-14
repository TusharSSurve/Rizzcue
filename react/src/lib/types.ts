export type ChildrenProps = {
  className?: string;
  children: React.ReactNode
}

export type APIProps = {
  id: string;
  line1: string;
  line2: string;
  is_nsfw: boolean;
  likes: number;
}

declare global {
  interface Window {
    html2canvas: any;
  }
}

export interface ColorTheme {
  background: string;
  text: string;
  cardBackground: string;
}

export interface CardData {
  id: number;
  content: string;
  source: string;
}