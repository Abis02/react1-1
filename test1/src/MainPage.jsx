import React from "react"
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: gray;
    flex-direction:row;
    align-items:flex-start;
    `;


const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
    justify-content: flex-start;
    background-color: lightgray;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white,
    font-size: 2rem,
    font-weight: bold;
    text-align: center;
`;

const Button = styled.button`
    color:${props => props.dark ? 'white' : 'dark'};
    background: ${props => props.dark ? 'black' : 'white'};
    border: 1px solid black;
`;

const RoundButton = styled(Button)`
    border-radius: 16px;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
]
export default function MainPage() {
    return (
        <Wrapper>
            <Title>
                안녕 리액트!
            </Title>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundButton>Round Button</RoundButton>
            <br /><br />
        {blockItem.map((blockItem) => {
            return (
                <Block
                    padding={blockItem.padding}
                    backgroundColor={blockItem.backgroundColor}
                >
                    {blockItems.label}
                </Block>
            );
        })}
        </Wrapper>
    );
}

