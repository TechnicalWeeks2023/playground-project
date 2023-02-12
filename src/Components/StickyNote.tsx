import { useState } from 'react';
import styled from 'styled-components';

interface IProps {
    x?: number; // x-axis in px
    y?: number; // y-axis in px
    color?: string; // color of note
    rotate?: number; // rotate note in degrees
    fontColor?: string; // color of the font in whole note
    shadowColor?: string; // color of the shadow
    author: string; // your name
    university: string; // your university
    title: string; // poem title
    children: any; // poem itself
}

interface IContainerProps extends IProps {
    isOpen: boolean;
}

interface IOther {
    isOpen: boolean;
}

export const StickyNote = (props: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container {...props} onClick={handleClick} isOpen={isOpen}>
            <Author isOpen={isOpen}>{props.author}</Author>
            <University isOpen={isOpen}>{props.university}</University>
            <Title isOpen={isOpen}>{props.title}</Title>
            <Description isOpen={isOpen}>{props.children}</Description>
        </Container>
    );
};

const Container = styled.article<IContainerProps>`
    width: ${({ isOpen }) => (isOpen ? '95%' : '250px')};
    height: ${({ isOpen }) => (isOpen ? '95%' : '250px')};

    position: absolute;
    left: ${({ isOpen, x }) => (isOpen ? '2.5%' : x ? `${x}px` : '50%')};
    top: ${({ isOpen, y }) => (isOpen ? '2.5%' : y ? `${y}px` : '50%')};

    background-color: ${({ color }) => (color ? color : 'pink')};
    transform: rotate(${({ isOpen, rotate }) => (isOpen ? 'rotate(0)' : rotate ? rotate : '0')}deg);

    color: ${({ fontColor }) => (fontColor ? fontColor : 'black')};
    box-shadow: 5px 5px 20px ${({ shadowColor }) => (shadowColor ? shadowColor : 'red')};

    border-radius: ${({ isOpen }) => (isOpen ? '40px' : '0')};

    transition: all 0.5s;

    cursor: pointer;
`;

const Author = styled.span<IOther>`
    position: absolute;
    left: 50%;
    top: 10px;

    transform: translateX(-50%);

    font-size: ${({ isOpen }) => (isOpen ? '2.5' : '1.5')}rem;
    white-space: nowrap;

    transition: all 0.5s;
`;

const University = styled.span<IOther>`
    position: absolute;
    right: 10px;
    top: ${({ isOpen }) => (isOpen ? '60' : '40')}px;

    font-size: ${({ isOpen }) => (isOpen ? '2' : '1')}rem;
    text-align: right;

    transition: all 0.5s;
`;

const Title = styled.span<IOther>`
    position: absolute;
    left: 50%;
    top: ${({ isOpen }) => (isOpen ? '125px' : '50%')};

    font-size: ${({ isOpen }) => (isOpen ? '2.25' : '1.25')}rem;
    text-align: center;
    white-space: nowrap;

    transform: translate(-50%, ${({ isOpen }) => (isOpen ? '0' : '-50%')});

    transition: all 0.5s;
`;

const Description = styled.div<IOther>`
    ${({ isOpen }) => (isOpen ? '' : 'display: none')};

    position: absolute;
    top: 200px;
    left: 50%;

    transform: translateX(-50%);

    font-size: 1.25rem;
    text-align: center;
    white-space: pre;

    transition: all 0.5s;
`;
