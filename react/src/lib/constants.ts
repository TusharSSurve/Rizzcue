import type { APIProps, ColorTheme } from "./types";

export const colorThemes: ColorTheme[] = [
  { background: 'rgb(18, 18, 18)', text: '#ffffff', cardBackground: '#282828' },
  { background: 'rgb(238, 238, 238)', text: '#000000', cardBackground: '#eeeeee' },
  { background: 'rgb(201,111,103)', text: '#fff', cardBackground: 'rgb(201,111,103)' },
  { background: 'rgb(68,37,35)', text: 'rgb(201,111,103)', cardBackground: 'rgb(68,37,35)' },
  { background: 'rgb(218,54,63)', text: '#fff', cardBackground: 'rgb(218,54,63)' },
  { background: 'rgb(12,125,167)', text: '#fff', cardBackground: 'rgb(12,125,167)' },
  { background: 'rgb(131,199,224)', text: '#fff', cardBackground: 'rgb(131,199,224)' },
  { background: 'rgb(44,33,76)', text: 'rgb(131,199,224)', cardBackground: 'rgb(44,33,76)' }
];

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const initialCards: APIProps[] = [
  { 
    id: "1", 
    line1: "Are you a magician?", 
    line2: "Because whenever I look at you, everyone else disappears.", 
    is_nsfw: false, 
    likes: 42 
  },
  { 
    id: "2", 
    line1: "Do you have a map?", 
    line2: "I keep getting lost in your eyes.", 
    is_nsfw: false, 
    likes: 38 
  },
  { 
    id: "3", 
    line1: "Are you WiFi?", 
    line2: "Because I'm really feeling a connection.", 
    is_nsfw: false, 
    likes: 55 
  },
  { 
    id: "4", 
    line1: "A Hug without u is just Hg", 
    line2: "and Hg is toxic.", 
    is_nsfw: false, 
    likes: 73 
  },
  { 
    id: "5", 
    line1: "Are you made of copper and tellurium?", 
    line2: "Because you're Cu-Te.", 
    is_nsfw: false, 
    likes: 29 
  }
];