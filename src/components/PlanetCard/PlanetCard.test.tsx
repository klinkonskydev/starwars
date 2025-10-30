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
    const name = screen.getByText(/mockedname/gi);
    const terrain = screen.getByText(/terrain/gi);
    const diameter = screen.getByText(/diameter/gi);

    expect(name).toBeInTheDocument();
    expect(terrain).toBeInTheDocument();
    expect(diameter).toBeInTheDocument();
    expect(name.parentElement).toHaveAttribute("href", "/1");
  });

  test("Must format the diameter to the en pattern", () => {
    const diameter = screen.getByText(/diameter/gi);
    const diameterValue = screen.getByText("1,000");
    const wrongDiameterFormatValue = screen.queryByText("1000");

    expect(diameter).toBeInTheDocument();
    expect(diameterValue).toBeInTheDocument();
    expect(wrongDiameterFormatValue).not.toBeInTheDocument();
  });

  test("Films must be listed correctly", () => {
    const firstFilmTitle = screen.getByText(/a new hope/gi);
    const secondFilmTitle = screen.getByText(/return of the jedi/gi);

    expect(firstFilmTitle).toBeInTheDocument();
    expect(secondFilmTitle).toBeInTheDocument();
  });
});
