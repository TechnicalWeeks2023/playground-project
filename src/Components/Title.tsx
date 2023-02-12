import styled from 'styled-components';

export const Title = () => {
    return (
        <Container>
            <span>Dual</span>
            <span>Study Program</span>
            <span>2023</span>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    position: absolute;
    left: 4%;
    top: 4%;

    width: 300px;
    height: 150px;

    font-size: 2.5rem;
    color: white;
`;
