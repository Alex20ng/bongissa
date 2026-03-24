import { QuestionCard } from "../../components/questionCard";
import { ContactCard } from "../../components/contactCard";
import { ServiceCard } from "../../components/serviceCard";
import { motion } from "framer-motion";


const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4
        }
    }
};

const titre = {
    hidden: {opacity: 0, y: -120},
    visible: {
        opacity: 1,
        y: 0,
        transition: {druration: 0.6}
    }
}

const slideRight = {
    hidden: {opacity: 0, x: 100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.6}
    }
}

const slideBottom = {
    hidden: {opacity: 0, y: 120},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6}
    }
}

export const Questions = () => {

    return (
        <motion.div 
            className="min-h-screen p-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.4, margin: "150px"}}
        >
            <motion.h1 
                className="text-3xl font-bold text-center"
                variants={titre}
            >
                Questions ?
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-[20%] lg:mt-[3%] min-h-screen">
                <div className="flex flex-col gap-5">
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Qui sommes nous ?" 
                            reponse="Bongissa est une organisation non gouvernementale basee au Congo-Brazzaville,
                            engagee dans la protecttion de l'environnement et la promotion du developpement durable.
                            Nous agissons a travers des initiatives innovantes visant a reduire l'impact envionnemental, valoriser
                            les ressources naturelles et ameliorer les conditions de vie des populations."
                        />
                    </motion.div>
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Qu'elle est notre vision ?" 
                            reponse="Notre vision est de devenir une reference en matiere de conservation de l'environnement
                            et de developpement durable en Republique du Congo. Nous aspirons a impulser un changement durable
                            des comportements des populations et des acteurs economiques en faveur d'un environnement sain."
                        />
                    </motion.div>
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Quelles sont les missions de Bongissa ?" 
                            reponse="Bongissa a pour mission de proteger l'environnement et de promouvoir le developpement durable a
                            travers des actions concretes de sensibilisation, d'innovation ecologique et de gestion responsable
                            des ressources naturelles, afin d'ameliorer les conditions de vie des populations."
                        />
                    </motion.div>
                    <motion.div variants={slideBottom} className="">
                        <QuestionCard 
                            question="Quels sont les domaines d'intervension de Bongissa ?" 
                            reponse="Bongissa intervient dans plusieurs domaines cles, notamment la valorisation
                            des dechets, la construction ecologique, les energies renouvelables, l'ecotourisme ainsi que 
                            l'agriculture et l'elevage durables."
                        />
                    </motion.div>
                </div>
                <motion.div variants={slideRight} className="flex flex-col lg:items-end gap-4 mt-[5%] lg:mt-0">
                    <ContactCard/>
                    <ServiceCard/>
                </motion.div>
            </div>
        </motion.div>
    )
}