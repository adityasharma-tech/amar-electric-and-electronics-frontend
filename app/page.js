import Navbar from "@/components/home/navbar";
import siteConfig from "@/config/siteConfig";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full" style={{
        backgroundImage: `url("/assets/images/hero.webp")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>

      </section>
    </main>
  );
}
