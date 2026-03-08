import { About } from "./pages/about"
import { Projets } from "./pages/projets"
import { Contacts } from "./pages/contacts"

function App() {
   const year = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="">
        <About/>
        <Projets/>
        <Contacts/>
      </main>
      <footer className="text-center p-3 bg-green-700 text-white">
        © {year} Bongissa. Tous droits réservés.
      </footer>
    </div>
  )
}

export default App
