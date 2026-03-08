import { Card } from "../components/card";
import { CardLong } from "../components/cardLong";
import { ProgressBar } from "../components/progressBar";
import {motion} from "framer-motion";

export const About = () => {
    return (
        <motion.div 
            className="p-10"
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5}}
            
            >
            <motion.h1
                className="text-3xl font-bold text-center mb-12"
                initial={{y:-200}}
                animate={{y:0}}
                transition={{delay:0.9}}
            >
                <span className="text-orange-400">Bon</span><span className="text-green-500">gissa</span> en bref
            </motion.h1>
            <div className="grid grid-cols-2">
                <div className="ml-6 ">
                    <div className="flex w-xl mb-4">
                        <motion.div
                            initial={{x:-800}}
                            animate={{x:0}}
                            transition={{delay: 1.2}}
                        >
                            <Card/>
                        </motion.div>
                        <motion.div
                            initial={{x:-800}}
                            animate={{x:0}}
                            transition={{delay: 1}}
                        >
                            <Card/>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{x:-800}}
                        animate={{x:0}}
                        transition={{delay:0.9}}
                    >
                        <CardLong/>
                    </motion.div>
                </div>
                <motion.div 
                    className="ml-10 mr-auto"
                    initial={{x:800}}
                    animate={{x:0}}
                    transition={{delay:0.9}}
                >
                    <h1 className="text-xs mb-13">
                        Une ONG (Organisation Non Gouvernementale) est une organisation qui
                        travaille pour aider les populations et améliorer les conditions de vie 
                        dans la société. Elle intervient souvent dans des domaines comme la santé, 
                        l’éducation, la protection de l’environnement ou l’aide humanitaire. Les ONG
                        agissent sans but lucratif et cherchent surtout à soutenir les personnes dans 
                        le besoin. Grâce à leurs actions, elles contribuent au développement des communautés
                        et à la solidarité entre les peuples.
                    </h1>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                </motion.div>
            </div>
            <motion.div 
                className="w-fit bg-green-400 px-5 py-2 rounded-3xl mr-auto ml-auto font-semibold cursor-pointer mt-4"
                initial={{y:200}}
                animate={{y:0}}
                transition={{delay: 0.9}}
            >
                About Us
            </motion.div>
        </motion.div>
    )
}