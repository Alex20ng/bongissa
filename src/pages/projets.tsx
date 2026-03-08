export const Projets = () => {
    const informations = [
        {
            image: "", 
            title: "Alex's design",
            description: `Une ONG (Organisation Non Gouvernementale) est une organisation qui
                        travaille pour aider les populations et améliorer les conditions de vie 
                        dans la société. Elle intervient souvent dans des domaines comme la santé`
        },
        {
            image: "", 
            title: "NG's design",
            description: `Une ONG (Organisation Non Gouvernementale) est une organisation qui
                        travaille pour aider les populations et améliorer les conditions de vie 
                        dans la société. Elle intervient souvent dans des domaines comme la santé`
        },
        {
            image: "", 
            title: "Gloire's design",
            description: `Une ONG (Organisation Non Gouvernementale) est une organisation qui
                        travaille pour aider les populations et améliorer les conditions de vie 
                        dans la société. Elle intervient souvent dans des domaines comme la santé`
        }
    ]


    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">
                <span className="text-orange-500">Nos </span>
                <span className="text-green-400">derniers</span><br/>
                <span className="text-green-400">projets & </span>
                <span className="text-orange-500">Annonces</span>
            </h1>
            <div className="flex justify-between mt-15">
                {informations.map((info) => <div className=" bg-green-600 w-[30%] h-105 rounded-3xl p-5">
                    <div className="bg-orange-400 w-full h-1/2 rounded-3xl"></div>
                    <h1 className="text-xl text-white font-semibold mt-3">{info.title}</h1>
                    <p className="text-xs text-white mt-6">
                        {info.description}
                    </p>
                </div>)}
            </div>
        </div>
    )
}