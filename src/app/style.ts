import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #efefef;
`

export const ContainerModal = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    padding: 3rem 2rem;

    border-radius: 8px;

    background-color: #ffffff;
`

export const TitleModal = styled.h1`
    background-color: #1e40af;
    margin: -3rem -2rem 0 -2rem;

    padding: 2rem 2rem;

    text-align: center;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;

    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`

export const Label = styled.label`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    color: #6b7280;
`

export const Input = styled.input`
    padding: 1rem;

    outline: 0px;
    
    border: 1px solid #dadee3;
    border-radius: 8px;

    background-color: #f9fafb;

    color: #061425;

    &:focus{
        border: 1px solid #1e40af;
    }
`

export const Select = styled.select`
    padding: 1rem;

    outline: 0px;

    border: 1px solid #dadee3;
    border-radius: 8px;

    background-color: #f9fafb;

    color: #061425;

    &:focus{
        border: 1px solid #1e40af;
    }
`

export const Option = styled.option`
    
`

export const Button = styled.button`
    padding: 1rem;

    outline: 0;
    border: 2px solid transparent;

    background-color: #1e40af;
    color: #ffffff;
    font-size: 1.125rem;
    font-weight: 600;

    border-radius: 8px;

    &:hover{
        border: 2px solid #1e40af;
        color: #1e40af;
        background-color: transparent;

        cursor: pointer;
    }
`

export const CurrencyResult = styled.input`
    padding: 1rem;

    outline: 0px;

    border: 1px solid #dadee3;
    border-radius: 8px;

    background-color: #efefef;
`