import {motion, useSpring} from "framer-motion";
import { TextCarousel } from "../components/textCarousel";
import logo from "../assets/logo.png";
import background from "../assets/img.png";
import { useTransform, useScroll } from "framer-motion";

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


const slideLeft = {
  hidden: { x: -120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};


const slideRight = {
  hidden: { x: 120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const Home = ({toHome, toAbout, toProjet, toQuestion, toContact}: {toHome: any, toAbout: any, toProjet: any, toQuestion: any, toContact: any}) => {
    const { scrollY } = useScroll();
    const rawRotate = useTransform(scrollY, [0,500], [0, 30]);
    const rotate = useSpring(rawRotate, {
        stiffness: 150,
        damping: 25
    })

    return (
        <div className="relative h-[120vh] overflow-hidden p-5 bg-emerald-800">
            <motion.img 
                src={background} 
                style={{ rotate }}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            <motion.div
                className="relative z-10"
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
                        <button className="cursor-pointer" onClick={toHome}>Acceuil</button>
                        <button className="cursor-pointer" onClick={toAbout}>A propos</button>
                        <button className="cursor-pointer" onClick={toProjet}>Projets</button>
                        <button className="cursor-pointer" onClick={toQuestion}>FAQs</button>
                        <motion.button
                            onClick={toContact}
                            className="w-[15%] p-1 bg-secondary text-white font-bold rounded-3xl cursor-pointer"
                            whileTap={{scale: 0.95}}
                            whileHover={{scale: 1.05}}
                        >
                            Contacts
                        </motion.button>
                    </div>
                </motion.header>
                <motion.div variants={slideLeft} className="mt-[10%]">
                    <h1 className="text-6xl text-white font-bold font-serif">
                        Chaque dechet<br/>
                        est revalorises.
                    </h1>
                </motion.div>
                <motion.div variants={slideRight} className="w-2xs ml-auto">
                    <TextCarousel/>
                </motion.div>
            </motion.div>
        </div>
    )
}