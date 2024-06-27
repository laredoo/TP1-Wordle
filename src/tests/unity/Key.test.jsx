import React from "react";
import userEvent from "@testing-library/user-event";
import { cleanup, screen } from "@testing-library/react";

import Key from "../../components/Key";
import { setupFixture } from "../contextFixture";

describe("Key component unity test", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders properly with a common alphabetic key", async () => {
    const { onSelectLetter } = setupFixture(
      <Key keyVal="A" bigKey={false} disabled={false} />
    );

    expect(screen.getByText("A")).toBeTruthy();
    expect(screen.getByText("A")).toHaveClass("key");

    await userEvent.click(screen.getByText("A"));
    expect(onSelectLetter).toHaveBeenCalledWith("A");
  });

  test("renders properly with disabled prop", async () => {
    const { onSelectLetter } = setupFixture(
      <Key keyVal="B" bigKey={false} disabled={true} />
    );

    expect(screen.getByText("B")).toBeTruthy();
    expect(screen.getByText("B")).toHaveClass("key");
    expect(screen.getByText("B")).toHaveClass("disabled");

    await userEvent.click(screen.getByText("B"));
    expect(onSelectLetter).toHaveBeenCalledWith("B");
  });

  test("renders properly with bigKey prop", async () => {
    const { onSelectLetter } = setupFixture(
      <Key keyVal="C" bigKey={true} disabled={false} />
    );

    expect(screen.getByText("C")).toBeTruthy();
    expect(screen.getByText("C")).toHaveClass("key");

    await userEvent.click(screen.getByText("C"));
    expect(onSelectLetter).toHaveBeenCalledWith("C");
  });

  test("renders properly when key is ENTER", async () => {
    const { onEnter } = setupFixture(
      <Key keyVal="ENTER" bigKey={false} disabled={false} />
    );

    expect(screen.getByText("ENTER")).toBeTruthy();
    expect(screen.getByText("ENTER")).toHaveClass("key");

    await userEvent.click(screen.getByText("ENTER"));
    expect(onEnter).toHaveBeenCalled();
  });

  test("renders properly when key is DELETE", async () => {
    const { onDelete } = setupFixture(
      <Key keyVal="DELETE" bigKey={false} disabled={false} />
    );

    expect(screen.getByText("DELETE")).toBeTruthy();
    expect(screen.getByText("DELETE")).toHaveClass("key");

    await userEvent.click(screen.getByText("DELETE"));
    expect(onDelete).toHaveBeenCalled();
  });
});
