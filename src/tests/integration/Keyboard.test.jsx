import React from "react";
import userEvent from "@testing-library/user-event";
import { cleanup, screen } from "@testing-library/react";

import { setupFixture } from "../contextFixture";
import Keyboard from "../../components/Keyboard";

describe("Keyboard and Key integration test", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders properly when click key ENTER on keyboard", async () => {
    const { onEnter } = setupFixture(<Keyboard />);

    await userEvent.click(screen.getByText("ENTER"));
    expect(onEnter).toHaveBeenCalled();
  });

  test("renders properly when user type ENTER", async () => {
    const { onEnter } = setupFixture(<Keyboard />);

    await userEvent.type(document.body, "{Enter}");
    expect(onEnter).toHaveBeenCalled();
  });

  test("renders properly when click key DELETE on keyboard", async () => {
    const { onDelete } = setupFixture(<Keyboard />);

    await userEvent.click(screen.getByText("DELETE"));
    expect(onDelete).toHaveBeenCalled();
  });

  test("renders properly when user type BACKSPACE", async () => {
    const { onDelete } = setupFixture(<Keyboard />);

    await userEvent.type(document.body, "{Backspace}");
    expect(onDelete).toHaveBeenCalled();
  });
});
