import Image from "next/image";
import { Usable, use } from "react";
import { PlanetCardList } from "../components/PlanetCardList";

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
        <PlanetCardList page={Number(params?.page) ?? 1} />
      </section>
    </main>
  );
}
