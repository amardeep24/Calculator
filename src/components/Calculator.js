import { useState, useCallback } from "react";
import styled from "styled-components";
import CalculatorButton from "./CalculatorButton";
import CalculatorScreen from "./CalculatorScreen";

const CalculatorLayout = styled.div`
    position: absolute;
    border: 4px solid rgba(255, 255, 255, 75%);
    left: 30%;
    top: 30%;
    width: 30vw;
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
`;
const Calculator = (props) => {
    //state
    const [currentOperand, setCurrentOperand] = useState(null);
    const [previousOperand, setPreviousOperand] = useState(null);
    const [operator, setOperator] = useState({ fn: null, name: null });

    const setOperation = useCallback((operator) => {
        setPreviousOperand(currentOperand);
        setOperator({ fn: operator.fn, name: operator.name });
        setCurrentOperand(null);
    }, [currentOperand]);

    const appendOperand = useCallback((value) => {
        let newOperand;
        if (value === ".") {
            if (('' + currentOperand).includes(".")) return;
        }
        newOperand = currentOperand ? currentOperand + '' + value : value;
        setCurrentOperand(newOperand);
    }, [currentOperand]);

    const computeResult = useCallback(() => {
        const result = operator.fn(previousOperand, currentOperand);
        setCurrentOperand('' + result);
        setPreviousOperand(null);
    }, [previousOperand, currentOperand, operator]);


    const clearAll = useCallback(() => {
        setCurrentOperand(null);
        setPreviousOperand(null);
        setOperator(null);
    }, []);

    const clear = useCallback(() => {
        let newCurrentOperand;
        if (currentOperand) {
            newCurrentOperand = currentOperand.substr(0, currentOperand.length - 1)
        }
        if (newCurrentOperand) {
            setCurrentOperand(newCurrentOperand);
        } else {
            setCurrentOperand(null);
        }

    }, [currentOperand]);

    return (
        <CalculatorLayout>
            <CalculatorScreen
                currentValue={currentOperand}
                previousValue={previousOperand}
                operator={operator ? operator.name : ""} />
            <CalculatorButton
                setOperation={setOperation}
                operator={{ fn: (a, b) => +a + +b, name: "+" }}>
                Add
            </CalculatorButton>
            <CalculatorButton
                setOperation={setOperation}
                operator={{ fn: (a, b) => +a - +b, name: "-" }}>
                Sub
             </CalculatorButton>
            <CalculatorButton
                setOperation={setOperation}
                operator={{ fn: (a, b) => +a * +b, name: "*" }}>
                Mul
            </CalculatorButton>
            <CalculatorButton
                setOperation={setOperation}
                operator={{ fn: (a, b) => +a / +b, name: "/" }}>
                Div
            </CalculatorButton>
            <CalculatorButton
                double
                setOperation={clearAll}>
                AC
            </CalculatorButton>
            <CalculatorButton
                setOperation={clear}>
                C
            </CalculatorButton>
            <CalculatorButton
                setOperation={appendOperand}
                operator={"."}>
                .
                </CalculatorButton>
            {Array.from({ length: 10 }, (_, i) => i)
                .map(i => <CalculatorButton
                    key={i}
                    setOperation={appendOperand}
                    operator={i}>
                    {i}
                </CalculatorButton>)}
            <CalculatorButton
                double
                setOperation={computeResult}>
                =
            </CalculatorButton>
        </CalculatorLayout>
    );
}
export default Calculator;