import {motion} from "framer-motion";
import logo from "../assets/logo.png";

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4
        }
    }
}

const header = {
    hidden: {opacity: 0, y: -100},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}

export const Home = () => {
    return (
        <motion.div
            className="min-h-screen p-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "150px"}}
        >
            <motion.header variants={header} className="flex items-center">
                <div className="w-14 aspect-square">
                    <img src={logo} alt="Logo" className="object-contain"/>
                </div>
                <div className="flex justify-between items-center text-white text-2xs font-semibold w-[50%] pl-4 p-1  bg-primary mx-auto rounded-4xl">
                    <a href="">Acceuil</a>
                    <a href="">A propos</a>
                    <a href="">Projet</a>
                    <a href="">FAQs</a>
                    <motion.button
                        className="w-[15%] p-1 bg-secondary text-white font-bold rounded-3xl cursor-pointer"
                        whileTap={{scale: 0.95}}
                        whileHover={{scale: 1.05}}
                    >
                        Contacts
                    </motion.button>
                </div>
            </motion.header>
        </motion.div>
    )
}