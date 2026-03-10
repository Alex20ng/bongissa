import { QuestionCard } from "../components/questionCard";
import { ContactCard } from "../components/contactCard";


export const Questions = () => {

    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3xl font-bold text-center">Questions ?</h1>
            <div className="grid grid-cols-2 mt-[5%] min-h-screen">
                <div className="">
                    <QuestionCard question="Q'est ce qu'est l'ONG Bongissa ?"/>
                </div>
                <div className="">
                    <ContactCard/>
                </div>
            </div>
        </div>
    )
}