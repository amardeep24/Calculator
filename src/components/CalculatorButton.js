import styled from "styled-components";

const CalculatorButtonLayout = styled.div`
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    background-color: ${props => props.color ? props.color : "grey"};
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 5px;
    &:active{
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    }
    grid-column: ${props => props.double ? "span 2" : "auto"};
`;

const CalculatorButton = ({ color, children, double, setOperation, operator }) => {
    return (
        <CalculatorButtonLayout
            color={color}
            double={double}
            onClick={() => setOperation(operator)}>
            {children}
        </CalculatorButtonLayout>
    );
}
export default CalculatorButton;