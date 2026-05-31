import { create } from "zustand";

interface AppState {
  loaded: boolean;
  setLoaded: (v: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (v: number) => void;
  mouseX: number;
  mouseY: number;
  setMouse: (x: number, y: number) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
  projectFilter: string;
  setProjectFilter: (f: string) => void;
}

export const useStore = create<AppState>((set) => ({
  loaded: false,
  setLoaded: (v) => set({ loaded: v }),
  loadingProgress: 0,
  setLoadingProgress: (v) => set({ loadingProgress: v }),
  mouseX: 0.5,
  mouseY: 0.5,
  setMouse: (x, y) => set({ mouseX: x, mouseY: y }),
  activeSection: "hero",
  setActiveSection: (s) => set({ activeSection: s }),
  projectFilter: "ALL",
  setProjectFilter: (f) => set({ projectFilter: f }),
}));
