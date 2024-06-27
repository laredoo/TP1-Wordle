import React from "react";
import { cleanup, screen } from "@testing-library/react";

import Letter from "../../components/Letter";
import { setupFixture } from "../contextFixture";

describe("Letter component unity test", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders properly when user did not tried yet", () => {
    setupFixture(<Letter attemptVal={0} letterPos={0} />, {
      correctWord: "APPLE",
      currAttempt: { attempt: 0, letter: 0 },
      board: [["T", "E", "S", "T", "E"]],
    });

    expect(screen.getByText("T")).toBeTruthy();
    expect(screen.getByText("T")).toHaveClass("letter");
    expect(screen.getByText("T")).not.toHaveClass("correct");
    expect(screen.getByText("T")).not.toHaveClass("almost");
    expect(screen.getByText("T")).not.toHaveClass("error");
  });

  test("renders properly when letter is not at the word", () => {
    setupFixture(<Letter attemptVal={0} letterPos={0} />, {
      correctWord: "APPLE",
      currAttempt: { attempt: 1, letter: 0 },
      board: [["T", "E", "S", "T", "E"]],
    });

    expect(screen.getByText("T")).toBeTruthy();
    expect(screen.getByText("T")).toHaveClass("letter");
    expect(screen.getByText("T")).not.toHaveClass("correct");
    expect(screen.getByText("T")).not.toHaveClass("almost");
    expect(screen.getByText("T")).toHaveClass("error");
  });

  test("renders properly when letter is at the word but in wrong position", () => {
    setupFixture(<Letter attemptVal={0} letterPos={1} />, {
      correctWord: "POSSE",
      currAttempt: { attempt: 1, letter: 0 },
      board: [["T", "E", "S", "T", "E"]],
    });

    expect(screen.getByText("E")).toBeTruthy();
    expect(screen.getByText("E")).toHaveClass("letter");
    expect(screen.getByText("E")).not.toHaveClass("correct");
    expect(screen.getByText("E")).toHaveClass("almost");
    expect(screen.getByText("E")).not.toHaveClass("error");
  });

  test("renders properly when letter is at the word and at the right place", async () => {
    setupFixture(<Letter attemptVal={0} letterPos={0} />, {
      correctWord: "TESTE",
      currAttempt: { attempt: 1, letter: 0 },
      board: [["T", "E", "S", "T", "E"]],
    });

    expect(screen.getByText("T")).toBeTruthy();
    expect(screen.getByText("T")).toHaveClass("letter");
    expect(screen.getByText("T")).toHaveClass("correct");
    expect(screen.getByText("T")).not.toHaveClass("almost");
    expect(screen.getByText("T")).not.toHaveClass("error");
  });
});
