import { Carousel } from "antd";

export const TextCarousel = () => {
    return (
        <Carousel autoplay={{dotDuration:true}} autoplaySpeed={3000} dots={false}>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-2xs font-bold font-serif">Bongissa</h1>
                <p className="text-xs text-left text-clip ">
                    Une ONG (Organisation Non Gouvernementale) est une organisation qui travaille 
                    pour aider les populations et améliorer les conditions de vie dans la société.
                </p>
            </div>
            <div className="w-xl rounded-3xl h-fit p-3 text-white">
                <h1 className="text-2xs font-bold font-serif">ONG</h1>
                <p className="text-xs text-left text-clip">
                    Une ONG (Organisation Non Gouvernementale) est une organisation qui travaille 
                    pour aider les populations et améliorer les conditions de vie dans la société.
                </p>
            </div>
        </Carousel>
    )
}