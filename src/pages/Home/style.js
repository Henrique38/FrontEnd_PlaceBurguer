
import styled from "styled-components";
import background from "../../assets/backgraund1.svg"



export const Container = styled.div`
    background: url("${background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    

    
`;

export const Image = styled.img`
    margin-top: 30px;

`;




export const InpuLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
    color: #EEEEEE;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25) ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    padding-left: 26px;
    border: none;
    outline: none;
    margin-bottom: 34px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;

`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
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
`;






