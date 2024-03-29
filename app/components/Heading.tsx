interface HeadingProps{
    title: string,
    center?: boolean
}

const Heading:React.FC<HeadingProps> = ({title, center = true}) => {
    return ( <div className={center? "text-center" : "text-start"}>
        <h1 className=" font-bold">{title}</h1>
    </div> );
}
 
export default Heading;