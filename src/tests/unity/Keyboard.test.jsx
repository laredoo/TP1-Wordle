import React from "react";
import { cleanup, screen } from "@testing-library/react";

import { setupFixture } from "../contextFixture";
import Keyboard from "../../components/Keyboard";

describe("Keyboard component unity test", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders all keyboard keys", () => {
    setupFixture(<Keyboard />);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    keys1.forEach((key) => {
      expect(screen.getByText(key)).toBeTruthy();
    });

    keys2.forEach((key) => {
      expect(screen.getByText(key)).toBeTruthy();
    });

    keys3.forEach((key) => {
      expect(screen.getByText(key)).toBeTruthy();
    });
  });

  test("render disabled letters properly", () => {
    setupFixture(<Keyboard />, {
      disabledLetters: ["A", "B", "C"],
    });

    ["A", "B", "C"].forEach((key) => {
      expect(screen.getByText(key)).toHaveClass("key");
      expect(screen.getByText(key)).toHaveClass("disabled");
    });
  });
});
