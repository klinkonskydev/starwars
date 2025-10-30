import Image from "next/image";
import { PlanetsLayout } from "../layouts/Planets";
import { Usable, use } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: Usable<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);

  return (
    <main>
      <header className="w-full grid place-items-center py-10">
        <Image
          src="/Star_Wars_Logo.svg"
          alt="Starwars logo"
          width={200}
          height={100}
          className="mix-blend-difference"
        />
      </header>

      <section className="px-10 mx-auto max-w-7xl">
        <PlanetsLayout page={Number(params?.page) ?? 1} />
      </section>
    </main>
  );
}
