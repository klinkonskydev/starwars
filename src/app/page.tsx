import { fetchPlanets } from "../lib/api";

export default async function Home() {
  const data = await fetchPlanets({});

  console.log({ data });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello world!</h1>
      </main>
    </div>
  );
}
