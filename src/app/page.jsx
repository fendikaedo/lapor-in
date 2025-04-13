import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Workflow from "@/components/homepage/Workflow";

export default function HomePage() {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <Workflow />
      </main>
    </div>
  );
}
