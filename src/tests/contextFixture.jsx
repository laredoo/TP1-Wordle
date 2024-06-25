import React from "react";
import { render } from "@testing-library/react";
import { AppContext } from "../App";
import { DEFAULT_BOARD } from "../Words";
import { vi } from "vitest";

export function setupFixture(children, props) {
  const defaultOptions = {
    board: DEFAULT_BOARD,
    gameOver: {
      gameOver: false,
      guessedWord: false,
    },
    currAttempt: { attempt: 0, letter: 0 },
    correctWord: "",
    disabledLetters: [],
    onEnter: vi.fn(),
    onDelete: vi.fn(),
    setBoard: vi.fn(),
    setCurrAttempt: vi.fn(),
    onSelectLetter: vi.fn(),
    setDisabledLetters: vi.fn(),
  };

  const context = {
    ...defaultOptions,
    ...props,
  };

  const { container, rerender } = render(
    <AppContext.Provider value={{ ...context }}>{children}</AppContext.Provider>
  );

  return {
    container,
    rerender,
    ...context,
  };
}
