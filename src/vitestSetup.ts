import "@testing-library/jest-dom/extend-expect";
import "cross-fetch/polyfill";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "ResizeObserver", {
  value: ResizeObserver,
});

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

export {};
