import React from "react";
import { cleanup, screen } from "@testing-library/react";

import { setupFixture } from "../contextFixture";
import Board from "../../components/Board";

describe("Board component unity test", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders all Board keys when board is empty", () => {
    setupFixture(<Board />);

    expect(screen.getAllByText("", { selector: ".letter" })).toHaveLength(30);
  });

  test("renders a word at the board properly", () => {
    setupFixture(<Board />, {
      board: [
        ["S", "U", "T", "I", "L"],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
    });

    expect(screen.getByText("S")).toBeTruthy();
    expect(screen.getByText("U")).toBeTruthy();
    expect(screen.getByText("T")).toBeTruthy();
    expect(screen.getByText("I")).toBeTruthy();
    expect(screen.getByText("L")).toBeTruthy();
    expect(screen.getAllByText("", { selector: ".letter" })).toHaveLength(25);
  });
});
