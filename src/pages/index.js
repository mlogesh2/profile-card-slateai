import HomePageSection from "@/components/organisms/HomePageSection";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Profile Card Slate.ai</title>
        <meta name="description" content="Profile cards listing page" />
      </Head>
      <header className="w-full border-b-2">
        <h1 className="mx-5 py-5 text-2xl font-bold text-black">Profile Card Slate.ai</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white">
        <HomePageSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
