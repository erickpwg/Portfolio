import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <p className="text-muted">Hero section — coming soon</p>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-muted">About section — coming soon</p>
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <p className="text-muted">Skills section — coming soon</p>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <p className="text-muted">Projects section — coming soon</p>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-muted">Contact section — coming soon</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
