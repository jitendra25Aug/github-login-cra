import { ReactNode } from "react"
import styled from "styled-components"

type Props = { children: ReactNode }

const Card = ({ children }: Props) => {
    return <Wrapper>
        {children}
    </Wrapper>
}

const Wrapper = styled.div`
background-color: var(--color-canvas-default);
border-color: var(--color-border-default);
border-radius: var(--borderRadius-medium, 6px);
border-style: solid;
border-width: var(--borderWidth-thin, 1px);
`;

export default Card;