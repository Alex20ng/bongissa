import { About } from "./pages/about"
import { Projets } from "./pages/projets"
import { Contacts } from "./pages/contacts"
import { Home } from "./pages/home";
import { Questions } from "./pages/questions";
import {useRef} from "react";

function App() {
   const year = new Date().getFullYear();

   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const projetRef = useRef(null);
   const contactRef = useRef(null);
   const questionRef = useRef(null);

   const scrollTo = (ref: React.RefObject<any>) => {
    ref.current.scrollIntoView({ behavior:"smooth"});
   }

  return (
    
    <div className="flex flex-col min-h-screen">
      <main className="">
        <section ref={homeRef}>
          <Home 
            toHome={() => scrollTo(homeRef)}
            toAbout={() => scrollTo(aboutRef)}
            toProjet={() => scrollTo(projetRef)}
            toQuestion={() => scrollTo(questionRef)}
            toContact={() => scrollTo(contactRef)}
          />
        </section>
        <section ref={aboutRef}><About/></section>
        <section ref={projetRef}><Projets/></section>
        <section ref={questionRef}><Questions/></section>
        <section ref={contactRef}>
          <Contacts
            toAbout={()=> scrollTo(aboutRef)}
            toProjet={()=> scrollTo(projetRef)}
            toQuestion={()=> scrollTo(questionRef)}
          />
        </section>
      </main>
      <footer className="text-center p-3 bg-primary text-white">
        Copyright © Bongissa {year} . Tous droits réservés.
      </footer>
    </div>
  )
}

export default App
