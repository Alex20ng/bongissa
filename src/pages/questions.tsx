import { QuestionCard } from "../components/questionCard";
import { ContactCard } from "../components/contactCard";
import { ServiceCard } from "../components/serviceCard";


export const Questions = () => {

    return (
        <div className="min-h-screen p-10">
            <h1 className="text-3xl font-bold text-center">Questions ?</h1>
            <div className="grid grid-cols-2 mt-[3%] min-h-screen">
                <div className="flex flex-col gap-5">
                    <QuestionCard question="Q'est ce qu'est l'ONG Bongissa ?" reponse="L'ONG Bongissa represente..."/>
                    <QuestionCard question="Q'est ce qu'est l'ONG Bongissa ?" reponse="L'ONG Bongissa represente..."/>
                    <QuestionCard question="Q'est ce qu'est l'ONG Bongissa ?" reponse="L'ONG Bongissa represente..."/>
                    <QuestionCard question="Q'est ce qu'est l'ONG Bongissa ?" reponse="L'ONG Bongissa represente..."/>
                </div>
                <div className="flex flex-col items-end gap-4">
                    <ContactCard/>
                    <ServiceCard/>
                </div>
            </div>
        </div>
    )
}