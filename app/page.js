import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
