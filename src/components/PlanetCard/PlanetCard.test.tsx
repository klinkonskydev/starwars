import { test, expect, describe, mock } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Film } from "../../types/back-end/planets";

import { Card, PlanetCardProps } from ".";

const planetMock: PlanetCardProps = {
  name: "MockedName",
  terrain: "desert",
  diameter: "1000",
  climate: "arid",
  url: "first/planet/1",
  films: [
    {
      title: "the return of those who didn't go",
    } as Film,
    {
      title: "return of the jedi",
    } as Film,
  ],
};

describe("<PlanetCard />", () => {
  test("Should render properly", () => {
    render(<Card {...planetMock} />);

    const name = screen.getByText(/mockedname/gi);
    const terrain = screen.getByText(/mockedname/gi);
    const diameter = screen.getByText(/mockedname/gi);
    const url = screen.getByText(/mockedname/gi);

    expect(name).toBeInTheDocument();
    expect(terrain).toBeInTheDocument();
    expect(diameter).toBeInTheDocument();
    expect(url).not.toBeInTheDocument();
  });
});
