import { PlusIcon, MinusIcon } from "lucide-react";
import { useState } from "react";
import {motion} from "framer-motion";

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

const slideBottom = {
    hidden: {opacity: 0, y: -10},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.6}
    }
}

export const QuestionCard = ({question}: {question: string}) => {    
    const [isClicked, setIsClicked] = useState(true);

    const click = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="h-40 relative">
            <div className="absolute z-10 flex justify-between w-[80%] h-[45%] items-center px-6 bg-[#D9D9D9] rounded-2xl font-semibold">
                {question}
                <button onClick={click} className="cursor-pointer">
                    {isClicked ? <PlusIcon/> : <MinusIcon/>}
                </button>
            </div>
            {isClicked ? <div></div>: <motion.div initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.4}} className="absolute top-30/100 w-[80%] h-[80%] px-6 pt-7 bg-[#d9d9d9c0] rounded-2xl">
                <p>C'est une organisation qui...</p>
            </motion.div>}
        </div>
    )
}