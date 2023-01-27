import React from 'react';
import { GameContext } from '../../Context/GameContext';
import { TodoContextType } from '../../types';
import { Container } from './styled';

interface propsMessage {
    text:string;
}

export const Message:React.FC<propsMessage> = ({text}) => {
    const { GameWin } = React.useContext(GameContext) as TodoContextType;

    return (
        <>
        { GameWin ? 
        <Container>
           <p> {text}</p>
        </Container>
        : null}
        </>
    );
}