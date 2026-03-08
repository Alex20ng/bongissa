export const Contacts = () => {

    return (
        <div className="p-10">
            <h1 className="text-xl font-bold">LOGO</h1>
            <div className="flex mt-20 mb-15">
                <label>News Lettter</label>
                <div className="w-fit bg-green-400 px-5 py-2 rounded-3xl ml-auto font-semibold cursor-pointer">
                    Contactez Nous
                </div>
            </div>
            <div className="w-6xl h-0.5 bg-gray-400 mr-auto ml-auto"></div>
            <div className="grid grid-cols-3 mt-15">
                <div className="flex justify-start gap-4">
                    <div className="w-12 aspect-square bg-amber-800 rounded-full mt-auto"></div>
                    <div className="w-12 aspect-square bg-amber-800 rounded-full mt-auto"></div>
                    <div className="w-12 aspect-square bg-amber-800 rounded-full mt-auto"></div>
                    <div className="w-12 aspect-square bg-amber-800 rounded-full mt-auto"></div>
                </div>
                <div className="flex flex-col justify-between">
                    <h1 className="text-2xs font-bold">Navigation</h1>
                    <h2 className="text-2xs">A propos</h2>
                    <h2 className="text-2xs">Nos projets</h2>
                    <h2 className="text-2xs">FAQs</h2>
                </div>
                <div className="flex flex-col justify-between h-30">
                    <h1 className="text-2xs font-bold">Contacts</h1>
                    <h2 className="text-2xs">(+242) 06 767 66 43</h2>
                    <h2 className="text-2xs">bongissa@exemple.com</h2>
                    <h2 className="text-2xs">7 rue eby, Massengo</h2>
                </div>
            </div>
        </div>
    )
}