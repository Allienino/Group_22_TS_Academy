import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetSection from "./components/PlanetSection";
import FactsTableSection from "./components/FactsTableSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <PlanetSection />
        <FactsTableSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;