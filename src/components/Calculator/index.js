

import Screen from "../Screen";
import ButtonBox from "../ButtonBox";
import { useContext, useEffect, useState } from "react";
import CalcContext from '../Contexts/CalcContext'


const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '='],
]



const Calculator = () => {
    
    // const MyCalcContext = useContext(CalcContext)
    const [calc, setCalc] = useState(
        {
            sign : "",
            num : 0,
            res : 0
        }
    )

    useEffect(()=>{
        console.log(calc)
    })
    
    return(
        <CalcContext.Provider value={{calc, setCalc}}>
            <div className="calculator">
                <div className="screen-container">
                    <Screen/>
                </div>

                <div className="button-box-container">
                    <ButtonBox buttons = {btnValues}/>
                </div>
            </div>
        </CalcContext.Provider>
    )
}


export default Calculator;