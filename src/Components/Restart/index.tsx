import React from 'react';
import { GameContext } from '../../Context/GameContext';
import { TodoContextType } from '../../types';
import { ButtonGlow, Container } from './styled';

export const Restart:React.FC = () => {
    const { GameWin,restartGame } = React.useContext(GameContext) as TodoContextType;

    return (
        <>
        { GameWin ? 
        <Container>
           <ButtonGlow onClick={restartGame}>Restart Game</ButtonGlow>
        </Container>
        : null}
        </>
    );
}