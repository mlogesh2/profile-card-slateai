import HomePageSection from "@/components/organisms/HomePageSection";

export default function Home() {
  return (
    <div>
      <header className="w-full border-b-2">
        <h1 className="mx-5 my-5 text-2xl font-bold">Profile Card Slate.ai</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomePageSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
