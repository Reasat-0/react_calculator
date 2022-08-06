
import Button from "../Button";

const ButtonBox = ({buttons}) => {
    return (
        <div className="button-box">

            {
                
                buttons.flat().map( (item , idx) => (
                    <Button 
                        value={item}
                        key={idx}
                    />
                ))
            }
        </div>
    )
}


export default ButtonBox;