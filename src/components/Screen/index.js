import { useContext } from "react";
import CalcContext from "../Contexts/CalcContext";


const Screen = () => {

    const calcContext = useContext(CalcContext)

    const {sign,num,res} = calcContext.calc;



    return (
        <div className="screen">
            <h4> {num ? num : res} </h4>
        </div>
    )
}


export default Screen;