import { GoBackButton } from "../../components/GoBackButton";
import { PlanetDetails } from "../../components/PlanetDetails";

export default async function Planet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main>
      <section className="px-10 mx-auto max-w-7xl space-y-10">
        <GoBackButton />
        <PlanetDetails id={Number(id)} />
      </section>
    </main>
  );
}
