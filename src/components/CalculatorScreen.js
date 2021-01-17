import styled from "styled-components";

const ScreenLayout = styled.div`
    background: lightgrey;
    border-bottom: 2px solid grey;
    height: 8vh;
    width: auto;
    grid-column: 1/-1;
    font-size: 50px;
    font-weight: bold;
    text-align: right;
`;
const MemLayout = styled.div`
    font-size: 25px;
`;

const CalculatorScreen = ({ currentValue, previousValue, operator }) => {
    return (
        <ScreenLayout>
            <MemLayout>{previousValue ? previousValue + operator: ""}</MemLayout>
            {currentValue ? currentValue : 0}
        </ScreenLayout>
    );
}
export default CalculatorScreen;