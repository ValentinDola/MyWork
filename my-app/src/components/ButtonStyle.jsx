import Styled from 'styled-components';


export const ButtonContainer = Styled.button`
    text-transform : capitalize;
    font-size : 1.2rem;
    background : transparent;
    border : 0.1rem solid var(--mainYou);
    color : var(--mainWhite);
    border-radius : 0.3rem;
    padding : 0.2rem 0.5rem;
    crusor : pointer;
    margin : 0.2rem 0.5rem 0.2rem 0;
    transition : all 0.5s ease-in-out;
    &:hover {
        background : var(--mainYou);
        color : var( --mainBlack);

    }&:focus {
        outline : none;
    }
`;

export const ButtonContainerIn = Styled.button`
    text-transform : capitalize;
    font-size : 1.2rem;
    background : transparent;
    border : 0.1rem solid var(--mainYou);
    color : var(--mainBlack);
    border-radius : 0.3rem;
    padding : 0.2rem 0.5rem;
    crusor : pointer;
    margin : 0.2rem 0.5rem 0.2rem 0;
    transition : all 0.5s ease-in-out;
    
    &:hover {
        background : var(--mainYou);
        color : var( --mainWhite);

    }&:focus {
        outline : none;
    }
`;
export const ButtonContainerClear = Styled.button`
    text-transform : capitalize;
    font-size : 1.3rem;
    background : transparent;
    border : 0.1rem solid var(--mainRed);
    color : var(--mainBlack);
    border-radius : 0.3rem;
    padding : 0.2rem 0.5rem;
    crusor : pointer;
    margin : 0.2rem 0.5rem 0.2rem 0;
    transition : all 0.5s ease-in-out;
    
    &:hover {
        background : var(--mainRed);
        color : var( --mainWhite);

    }&:focus {
        outline : none;
    }
`;


export const ModalContainer = Styled.div`
   position : fixed;
   top : 0;
   left : 0;
   right : 0;
   bottom : 0;
  background : rgba (100,100,100,100)
   
   display : flex;
   align-items : center;
   

`;

export const SmallButton = Styled.button`
border-radius : 0.3rem;
border : 0.05rem solid var(--lightBlue);

color : var ( --mainBlack);
transition : all 0.5s ease-in-out;
background : transparent;
&:hover {
    background : var(--lightBlue);
    color : var( --mainWhite);

}&:focus {
    outline : none;
}
`