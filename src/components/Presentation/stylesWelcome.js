import styled, { keyframes } from 'styled-components';

const DegradedTitleh4 = styled.h2`
    // background-image: linear-gradient(45deg, #3aeaa4, #3a67ea);
    // background-image: linear-gradient(45deg, #ffd866, #ff5733);
    background: #e7fe55;
    font-size: ${({ size }) => (size === undefined ? '60px' : size + 'px')};
    display: ${({ display }) => (display === undefined ? 'inline' : 'block')};
    font-weight: ${({ weight }) => (weight === undefined ? 900 : weight)};
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    margin: -20px;
    border: none;
    line-height: 80px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
`;

const DegradedBorder = styled.div`
    .gradient-border {
        animation: gradient 5s linear infinite;
        background: linear-gradient(100deg, var(--violet) 25%, var(--turquoise) 50%, var(--violet) 75%);
        background-repeat: repeat;
        border-radius: 2rem;
        padding: 2rem;
        margin: 5rem;
    }
`;
const titles = styled(DegradedTitleh4)`
    font-size: 70px;
`;

const blink = keyframes`
50% {border-color:transparent }
`;
const typing = keyframes`
from { width:0 }

`;
const textEffectWrite = styled.span`
// background-image: linear-gradient(45deg, #ffd866, #ffd866);
// color:${({ color }) => (color === undefined ? '#e7fe55' : color)} ;
font-size: ${({ size }) => (size === undefined ? '60px' : size + 'px')};
display: ${({ display }) => (display === undefined ? 'inline' : 'block')};
font-weight: ${({ weight }) => (weight === undefined ? 900 : weight)};
font-family: 'Roboto', sans-serif;



 white-space: nowrap;
 border-right:4px solid;
 width: 20ch;
 display: block;
 animation: ${typing} 3s steps(20) infinite ,
 ${blink} .5s infinite step-end alternate;
overflow: hidden;
}
`;

const StylesComponents = {
    DegradedTitleh4,
    titles,
    DegradedBorder,
    textEffectWrite
};

export default StylesComponents;
