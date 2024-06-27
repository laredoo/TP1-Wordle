import React from "react";
import { cleanup, screen } from "@testing-library/react";

import { setupFixture } from "../contextFixture";
import Board from "../../components/Board";

describe("Board and Letter integration test", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render correct word properly", () => {
    setupFixture(<Board />, {
      board: [
        ["S", "U", "T", "I", "L"],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      correctWord: "SUTIL",
      currAttempt: { attempt: 1, letter: 0 },
    });

    const correctLetters = ["S", "U", "T", "I", "L"];
    correctLetters.forEach((letter) => {
      expect(screen.getByText(letter)).toBeTruthy();
      expect(screen.getByText(letter)).toHaveClass("letter");
      expect(screen.getByText(letter)).toHaveClass("correct");
    });

    expect(screen.getAllByText("", { selector: ".letter" })).toHaveLength(25);
  });
});
