import { test, expect, describe, mock } from "bun:test";
import { render, screen } from "@testing-library/react";

mock.module("../../lib/apollo-client", () => ({
  __esModule: true,
  client: {
    query: async () => ({
      data: {
        planet: {
          name: `earth`,
          rotation_period: '200',
          orbital_period: '100',
          created: '',
          edited: '',
          gravity: '1 Standard',
          population: '200000',
          surface_water: '20',
          terrain: "desert",
          diameter: "1000",
          climate: "arid",
          url: "first/planet/1",
          films: [{ title: "a new hope" }, { title: "return of the jedi" }],
          residents: [
            {
              gender: 'woman',
              eye_color: 'brown',
              hair_color: 'white',
              name: 'Lady Gaga',
              url: 'https://google.com/search?q=lady+gaga',
              vehicles: [
                {
                  name: 'BMW M3',
                  manufacturer: 'BMW',
                  model: 'BMW'
                }
              ],
              species: [
                {
                  name: 'Singer'
                }
              ]
            }
          ],
        },
      },
      // se seu código checa "error", inclua explicitamente como null
      error: null,
    }),
  },
}));

describe("<PlanetDetails />", () => {
  test('must render the component correctly', async () => {
    const { PlanetDetails } = await import(".");

    const jsx = await PlanetDetails({ id: 1 });

    expect(jsx).toBeTruthy();
  })

  test("must render the planet name", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const name = screen.getAllByText(/earth/ig);
    expect(name).toHaveLength(2);
  });

  test("must render the planet rotation period", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const rotationPeriod = screen.getByText(/^200$/i);
    expect(rotationPeriod).toBeInTheDocument();
  });

  test("must render the planet orbital period", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const orbitalPeriod = screen.getByText(/^100$/i);
    expect(orbitalPeriod).toBeInTheDocument();
  });

  test("must render the planet diameter", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const diameter = screen.getByText(/^1000$/i);
    expect(diameter).toBeInTheDocument();
  });

  test("must render the planet climate", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const climate = screen.getByText(/^arid$/i);
    expect(climate).toBeInTheDocument();
  });

  test("must render the planet gravity", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const gravity = screen.getByText(/1 standard/i);
    expect(gravity).toBeInTheDocument();
  });

  test("must render the planet terrain", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const terrain = screen.getByText(/desert/i);
    expect(terrain).toBeInTheDocument();
  });

  test("must render the planet population", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const population = screen.getByText(/^200000$/i);
    expect(population).toBeInTheDocument();
  });

  test("must render the residents heading", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const nativesHeading = screen.getByText(/maybe you also must know the natives/i);
    expect(nativesHeading).toBeInTheDocument();
  });

  test("must render the lady gaga resident", async () => {
    const { PlanetDetails } = await import(".");
    render(await PlanetDetails({ id: 1 }));

    const name = screen.getByText(/lady gaga/i);
    expect(name).toBeInTheDocument();
  });
});
