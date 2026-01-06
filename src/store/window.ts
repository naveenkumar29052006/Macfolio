import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type WindowState = {
  isOpen: boolean;
  zIndex: number;
  data: unknown | null;
  isMinimized?: boolean;
  isMaximized?: boolean;
};

type WindowKey = keyof typeof WINDOW_CONFIG;

type WindowStore = {
  windows: Record<WindowKey, WindowState>;
  nextZIndex: number;

  openWindow: (key: WindowKey, data?: unknown) => void;
  closeWindow: (key: WindowKey) => void;
  focusWindow: (key: WindowKey) => void;
  minimizeWindow: (key: WindowKey) => void;
  maximizeWindow: (key: WindowKey) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (key, data = null) =>
      set((state) => {
        const win = state.windows[key];
        win.isOpen = true;
        win.data = data ?? win.data;
        win.zIndex = state.nextZIndex;
        win.isMinimized = false;
        state.nextZIndex++;
      }),

    closeWindow: (key) =>
      set((state) => {
        const win = state.windows[key];
        win.isOpen = false;
        win.data = null;
        win.zIndex = INITIAL_Z_INDEX;
        win.isMinimized = false;
        win.isMaximized = false;
      }),

    focusWindow: (key) =>
      set((state) => {
        state.windows[key].zIndex = state.nextZIndex++;
        state.windows[key].isMinimized = false;
      }),

    minimizeWindow: (key) =>
      set((state) => {
        state.windows[key].isMinimized = true;
      }),

    maximizeWindow: (key) =>
      set((state) => {
        state.windows[key].isMaximized = !state.windows[key].isMaximized;
      }),
  }))
);

export default useWindowStore;
