export  const Card = ({src}: {src:string}) => {
    return (
        <div className="w-2xs h-45 bg-primary rounded-3xl mr-2 overflow-hidden">
            <img src={src} className="object-contain"/>
        </div>
    );
}