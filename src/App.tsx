import { About } from "./pages/about"
import { Projets } from "./pages/projets"
import { Contacts } from "./pages/contacts"
import { Home } from "./pages/home";
import { Questions } from "./pages/questions";

function App() {
   const year = new Date().getFullYear();

  return (
    
    <div className="flex flex-col min-h-screen">
      <main className="">
        <Home/>
        <About/>
        <Projets/>
        <Questions/>
        <Contacts/>
      </main>
      <footer className="text-center p-3 bg-primary text-white">
        Copyright © Bongissa {year} . Tous droits réservés.
      </footer>
    </div>
  )
}

export default App
