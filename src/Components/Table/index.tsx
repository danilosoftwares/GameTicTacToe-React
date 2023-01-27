import React from 'react';
import { Container } from './styled';

interface propsLayout {
    children?: React.ReactNode
}

export const Table:React.FC<propsLayout> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}