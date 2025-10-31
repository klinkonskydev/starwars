import { test, expect, describe, mock } from "bun:test";
import { render, screen } from "@testing-library/react";
import ResponsivePagination from "react-responsive-pagination";

mock.module("../PlanetCard", () => ({
  __esModule: true,
  Card: () => {
    return <div>planet</div>;
  },
}));

mock.module("../Pagination", () => ({
  __esModule: true,
  Pagination: ResponsivePagination,
}));

mock.module("../../lib/apollo-client", () => ({
  __esModule: true,
  client: {
    query: async () => ({
      data: {
        planets: {
          count: 60,
          results: Array.from({ length: 10 }).map((_, i) => ({
            name: `MockedName ${i + 1}`,
            terrain: "desert",
            diameter: "1000",
            climate: "arid",
            url: "first/planet/1",
            films: [{ title: "a new hope" }, { title: "return of the jedi" }],
          })),
        },
      },
      // se seu código checa "error", inclua explicitamente como null
      error: null,
    }),
  },
}));

describe("<PlanetCardList />", () => {
  test("Must render the component correctly", async () => {
    const { PlanetCardList } = await import(".");

    const jsx = await PlanetCardList({ page: 1 });

    expect(jsx).toBeTruthy();
  });

  test("Must render 10 planet card", async () => {
    const { PlanetCardList } = await import(".");

    render(await PlanetCardList({ page: 1 }));

    const planets = screen.getAllByText(/planet/i);
    expect(planets).toHaveLength(10);
  });
});
