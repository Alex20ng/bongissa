export const Home = () => {
    return (
        <div className="min-h-screen p-8">
            <header className="flex justify-between items-center text-white text-2xs font-semibold w-[50%] p-1 bg-green-400 mx-auto rounded-4xl">
                <a href="">Acceuil</a>
                <a href="">A propos</a>
                <a href="">Projet</a>
                <a href="">FAQs</a>
                <button className="w-[15%] p-1 bg-orange-500 text-white font-bold rounded-3xl">Contacts</button>
            </header>
        </div>
    )
}