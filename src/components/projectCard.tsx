

export const ProjectCard = ({titre, src}: {titre: string, src: string}) => {
    return (
        <div className=" bg-primary w-[90%] h-[70%] rounded-3xl p-5">
            <div className="w-full h-1/2 rounded-3xl overflow-hidden">
                <img src={src} className="w-full h-full object-cover"/>
            </div>
            <h1 className="text-xl text-white font-semibold mt-3">{titre}</h1>
            <p className="text-xs text-white mt-6">
                Une ONG (Organisation Non Gouvernementale) est une organisation qui
                travaille pour aider les populations et améliorer les conditions de vie 
                dans la société. Elle intervient souvent dans des domaines comme la santé
            </p>
        </div>
    )
}