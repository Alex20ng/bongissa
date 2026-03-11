import {motion} from "framer-motion";
import logo from "../assets/logo.png";
import send from "../assets/send.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import whatsapp from "../assets/whatsapp.png";

export const Contacts = () => {

    return (
        <div className="p-10">
            <div className="w-14 aspect-square">
                <img src={logo} alt="Logo" className="object-contain"/>
            </div>
            <div className="flex mt-20 mb-15">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold">News Lettter</label>
                    <div className="flex gap-2">
                        <input
                            type="email" 
                            id="email" 
                            placeholder="bongissa@exemple.com" 
                            className="px-4 py-2 border-2 border-primary bg-green-200 rounded-2xl"
                        />
                        <motion.div 
                            className="w-10 aspect-square bg-primary rounded-full flex justify-center items-center cursor-pointer"
                            whileTap={{scale: 0.95}}
                            whileHover={{scale: 1.05}}
                        >
                                <img src={send} alt="..." className="object-contain"/>
                        </motion.div>
                    </div>
                </div>
            <motion.button 
                whileTap={{scale: 0.95}}
                whileHover={{scale: 1.05}}
                className="w-fit bg-primary px-5 py-2 mt-[10%] rounded-3xl font-semibold cursor-pointer text-white ml-auto"
            >
                Contactez Nous
            </motion.button>
            </div>
            <div className="w-6xl h-0.5 bg-gray-400 mr-auto ml-auto"></div>
            <div className="grid grid-cols-3 mt-15">
                <div className="flex justify-start gap-4">
                    <div className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={facebook} alt="..." className="object-contain"/>
                    </div>
                    <div className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={instagram} alt="..." className="object-contain"/>
                    </div>
                    <div className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={whatsapp} alt="..." className="object-contain"/>
                    </div>
                    <div className="w-10 aspect-square  rounded-full mt-auto cursor-pointer">
                        <img src={tiktok} alt="..." className="object-contain"/>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <h1 className="text-2xs font-bold">Navigation</h1>
                    <a href="" className="text-2xs">A propos</a>
                    <a href=""  className="text-2xs">Nos projets</a>
                    <a href=""  className="text-2xs">FAQs</a>
                </div>
                <div className="flex flex-col justify-between h-30">
                    <h1 className="text-2xs font-bold">Contacts</h1>
                    <p className="text-2xs">(+242) 06 767 66 43</p>
                    <p className="text-2xs">bongissa@exemple.com</p>
                    <p className="text-2xs">7 rue eby, Massengo</p>
                </div>
            </div>
        </div>
    )
}