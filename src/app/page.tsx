import Header from "../../components/Header";

export default function Home() {
  return (
    <main className="pt-16">
        <Header />
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl">Home Page</h1>
      </section>
    </main>
  );
}
