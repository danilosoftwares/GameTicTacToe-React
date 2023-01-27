import React from 'react';
import { GameContext } from '../../Context/GameContext';
import { MarkGame, TodoContextType } from '../../types';
import { Container } from './styled';

const letterO = 'circle.png';
const letterX = 'x.png';

interface propsBox {
    position:string;
}

export const Box:React.FC<propsBox> = ({position}) => {
    const { getOdd, setOdd } = React.useContext(GameContext) as TodoContextType;

    return (
        <Container onClick={()=>setOdd(position)}>
            { getOdd(position) === MarkGame.X ? 
            <img height={128} src={letterX} alt={"nothing"}/> 
            : getOdd(position) === MarkGame.O ? 
            <img height={128} src={letterO} alt={"nothing"}/> 
            : null
            }
        </Container>
    );
}