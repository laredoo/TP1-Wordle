import React from "react";
import { cleanup, screen } from "@testing-library/react";

import GameOver from "../../components/GameOver";
import { setupFixture } from "../contextFixture";

describe("GameOver component unity test", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders with failed game message", () => {
    setupFixture(<GameOver />, {
      gameOver: { guessedWord: false, gameOver: true },
      correctWord: "banana",
      currAttempt: { attempt: 3 },
    });

    expect(
      screen.getByText("Você falhou em adivinhar a palavra do Wordle")
    ).toBeTruthy();
    expect(screen.getByText("Palavra correta: banana")).toBeTruthy();
  });

  test("renders with successful game message", () => {
    setupFixture(<GameOver />, {
      gameOver: { guessedWord: true, gameOver: true },
      correctWord: "apple",
      currAttempt: { attempt: 1 },
    });

    expect(screen.getByText("Você adivinhou a palavra do Wordle")).toBeTruthy();
    expect(screen.getByText("Palavra correta: apple")).toBeTruthy();
    expect(screen.getByText("Você adivinhou com 1 tentativas")).toBeTruthy();
  });
});
