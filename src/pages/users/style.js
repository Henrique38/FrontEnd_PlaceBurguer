
import styled from "styled-components";
import background from "../../assets/backgraund2.svg"

export const Container = styled.div `
    background: url("${background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

    
`;

export const Image = styled.img`
    margin-top: 30px;

`;

    
export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 120px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #ffffff;
    font-style: normal;
    margin-top: 80px;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotateY(180deg)
    }
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;
    
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
    
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`




