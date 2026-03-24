import { Carousel } from "antd";

export const TextCarousel = () => {
    return (
        <Carousel autoplay={{dotDuration:true}} autoplaySpeed={4000} dots={false}>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">Le savez-vous ?</h1>
                <p className="text-2xs text-left text-clip ">
                    D'apres le Ministere de l'evironnement, la pollution plastique en forte
                    croissance menace les ecosystemes et pourrait depasser la quantite 
                    des poissons dans les oceans d'ici 2050 en Republique du Congo.
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">ONU</h1>
                <p className="text-2xs text-left text-clip">
                    Chaque congolais produit environ 13 kilos de dechets plastiques
                    par annees.<br/>Alors il est temps de penser a recycler
                    nos dechets plastiques.
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">PND 2022-2026</h1>
                <p className="text-2xs text-left text-clip">
                    La Republique du congo dispose d'un fort potentiel agricole avec 10 millions
                    d'hectares de terres arables, un climat favorable et de nombreux debouches,
                    mais moins de 2% de ces terres sont exploitees.<br/>
                    <span className="font-bold">Pourquoi ne pas investir dans ce secteur ?</span>
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-xl font-bold font-serif">Eujournal</h1>
                <p className="text-2xs text-left text-clip">
                    Plus de 60% des dechets produit par les menages en Republique du Congo
                    sont biodegradables.<br/>
                    <span className="font-bold">Plutot pratique pour faire de la metanisation
                        du compostage, vous ne trouvez pas ?
                    </span>
                </p>
            </div>
        </Carousel>
    )
}