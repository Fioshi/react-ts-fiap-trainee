import styled from "styled-components"

export const ContentSection = styled.section`
    height: 100vh;
    background-color: var(--black);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Title = styled.h1`
    font-family: 'Gotham-Bold', sans-serif;
    font-size: 8rem;
    line-height: 100%;
    color: var(--pastel-blue);
`

export const Button = styled.button`
    font-family: 'Gotham', sans-serif;
    color: var(--magenta);
    background-color: transparent;
    font-size: 3rem;
    border: var(--magenta) solid 1px;
    height: 2em;
    width: 15em;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover{
        background-color: var(--magenta);
        color: var(--black);
    }
`
