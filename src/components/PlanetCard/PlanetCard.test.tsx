import { test, expect, describe, beforeEach } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Film } from "../../types/backend/planets";

import { Card, PlanetCardProps } from ".";

const planetMock: PlanetCardProps = {
  name: "MockedName",
  terrain: "desert",
  diameter: "1000",
  climate: "arid",
  url: "first/planet/1",
  films: [
    {
      title: "a new hope",
    } as Film,
    {
      title: "return of the jedi",
    } as Film,
  ],
};

describe("<PlanetCard />", () => {
  beforeEach(() => {
    render(<Card {...planetMock} />);
  });

  test("Must render the component correctly", () => {
    const name = screen.getByText(/mockedname/i);
    const terrain = screen.getByText(/terrain/i);
    const diameter = screen.getByText(/diameter/i);

    expect(name).toBeInTheDocument();
    expect(terrain).toBeInTheDocument();
    expect(diameter).toBeInTheDocument();
    expect(name.parentElement).toHaveAttribute("href", "/1");
  });

  test("Must format the diameter to the en pattern", () => {
    const diameter = screen.getByText(/diameter/i);
    const diameterValue = screen.getByText("1,000");
    const wrongDiameterFormatValue = screen.queryByText("1000");

    expect(diameter).toBeInTheDocument();
    expect(diameterValue).toBeInTheDocument();
    expect(wrongDiameterFormatValue).not.toBeInTheDocument();
  });

  test("Films must be listed correctly", () => {
    const firstFilmTitle = screen.getByText(/a new hope/i);
    const secondFilmTitle = screen.getByText(/return of the jedi/i);

    expect(firstFilmTitle).toBeInTheDocument();
    expect(secondFilmTitle).toBeInTheDocument();
  });
});
