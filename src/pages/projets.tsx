import {motion} from "framer-motion";
import { ProjectCard } from "../components/projectCard";

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

const titre = {
    hidden: {y: -100, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}

const slideBottom = {
    hidden: {y: 150,opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}


export const Projets = () => {

    return (
        <motion.div 
            className="min-h-screen p-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
        >
            <motion.h1 
                className="text-3xl font-bold" 
                variants={titre}
            >
                <span className="text-orange-500">Nos </span>
                <span className="text-green-400">derniers</span><br/>
                <span className="text-green-400">projets & </span>
                <span className="text-orange-500">Annonces</span>
            </motion.h1>
            <div className="min-h-screen max-w-6xl flex justify-center gap-10 mx-auto mt-[5%]">
                <motion.div variants={slideBottom}>
                    <ProjectCard titre="Alex Design"/>
                </motion.div>

               <motion.div variants={slideBottom}>
                    <ProjectCard titre="Alex Design"/>
                </motion.div>

                <motion.div variants={slideBottom}>
                    <ProjectCard titre="Alex Design"/>
                </motion.div>
                
            </div>
        </motion.div>
    )
}