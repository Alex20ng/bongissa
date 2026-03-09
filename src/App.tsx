import { About } from "./pages/about"
import { Projets } from "./pages/projets"
import { Contacts } from "./pages/contacts"
import { Home } from "./pages/home";

function App() {
   const year = new Date().getFullYear();

  return (
    
    <div className="flex flex-col min-h-screen">
      <main className="">
        <Home/>
        <About/>
        <Projets/>
        <Contacts/>
      </main>
      <footer className="text-center p-3 bg-green-700 text-white">
        Copyright © Bongissa {year} . Tous droits réservés.
      </footer>
    </div>
  )
}

export default App
