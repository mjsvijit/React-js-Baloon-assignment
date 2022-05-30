const Circle = ({color, number}) => {
    
    return(
        <div>
            <div style={{backgroundColor: `${color}`}} className="circle">
                <h3>{number}</h3>
            </div>
        </div>
    )
}
export {Circle}