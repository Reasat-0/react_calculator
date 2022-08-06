import { useContext } from "react";
import CalcContext from "../Contexts/CalcContext";

const getClassName = (btnValue) => {
    const classes = {
        "=" : 'equals',
        '+' : 'operators',
        '-' : 'operators',
        '/' : 'operators',
        'x' : 'operators',
        'C' : 'clear'
    }
    return classes[btnValue];
}


const Button = ({value}) => {
    const calcContext = useContext(CalcContext)

    const {calc,setCalc} = calcContext;

    const handleClick = () => {
        const result = {
            '.' : dotClicked,
            'C' : resetClicked,
            '=' : equalsClicked,
            '+' : signClicked,
            '-' : signClicked,
            '/' : signClicked,
            'x' : signClicked,
            '%' : signClicked,
        }
        if(result[value]){
            return result[value]()
        }
        else{
            return handleNumClick()
        }
    }

    const handleNumClick = () => {

        const numString = value.toString()

        let numValue;

        if(numString === '0' && calc.num === 0 ){
            numValue = "0"
        }
        else{
            numValue =  Number(calc.num + numString)
        }

        // ( calc.num === 0 && value.toString() === '0' ) ? 0 : calc.num + value.toString()
        setCalc({
            ...calc,
            num : numValue
        })
    }
    const signClicked = () => {
        let signValue = value.toString()

        if( calc.num === 0 ){
            signValue = ""
        }
        else{
            setCalc({
                ...calc,
                sign: signValue,
                res : !calc.res && calc.num ? calc.num : calc.res,
                num : 0
            })
        }
    }
    const dotClicked = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ?  calc.num + value : calc.num
        })
    }
    const resetClicked = () => {
        setCalc({
            ...calc,
            num : 0,
            res: 0,
            sign: ""
        })
    }
    const equalsClicked = () => {
        if(calc.res && calc.num){
            const math = (a,b,sign) => {
                const result = {
                    '+' : (a,b) => (a + b),
                    '-' : (a,b) => (a - b),
                    '/' : (a,b) => (a / b),
                    '*' : (a,b) => (a * b),
                    '%' : (a,b) => (a * b / 100),
                }

                return result[sign](a,b,sign)

            }
            setCalc({
                res: math(calc.res,calc.num,calc.sign),
                num: 0,
                sign: ""
            })
        }
    }
    return (
        <button 
            className={`${getClassName(value) ? getClassName(value) : "" } button`}
            onClick = {handleClick}
        > 
            { value }
        </button>
    )
}


export default Button;