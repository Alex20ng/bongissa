import { Card } from "../components/card";
import { CardLong } from "../components/cardLong";
import { ProgressBar } from "../components/progressBar";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};


const title = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};


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

const buttonAnim = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, }
  }
};

export const About = () => {
  return (
    <motion.div
      className="min-h-screen p-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount: 0.4, margin: "150px"}}
    >

      <motion.h1
        className="text-3xl font-bold text-center mb-[3%]"
        variants={title}
      >
        <span className="text-secondary">Bon</span>
        <span className="text-primary">gissa</span> en bref
      </motion.h1>

      <div className="grid grid-cols-2 gap-8">
        <div className="ml-6">
          <div className="flex  mb-4">
            <motion.div variants={slideLeft}>
              <Card />
            </motion.div>

            <motion.div variants={slideLeft}>
              <Card />
            </motion.div>
          </div>

          <motion.div variants={slideLeft}>
            <CardLong />
          </motion.div>

        </div>

        <motion.div
          className="ml-10 mr-auto"
          variants={slideRight}
        >
          <p className="text-xs mb-10 leading-relaxed">
            Une ONG (Organisation Non Gouvernementale) est une organisation qui
            travaille pour aider les populations et améliorer les conditions de vie
            dans la société. Elle intervient souvent dans des domaines comme la santé,
            l’éducation, la protection de l’environnement ou l’aide humanitaire.
            Les ONG agissent sans but lucratif et cherchent surtout à soutenir les
            personnes dans le besoin. Grâce à leurs actions, elles contribuent au
            développement des communautés et à la solidarité entre les peuples.
          </p>

          <ProgressBar value={80}/>
          <ProgressBar value={30}/>
          <ProgressBar value={90}/>
        </motion.div>

      </div>

      <motion.button
        className="block mx-auto bg-primary px-5 py-2 rounded-3xl font-semibold mt-8 cursor-pointer text-white"
        variants={buttonAnim}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        About Us
      </motion.button>

    </motion.div>
  );
};