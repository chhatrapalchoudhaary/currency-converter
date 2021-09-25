import styled from 'styled-components';

const PageNotFound = (props) => {

    return(
        <Container>
            <img src="/images/1599716993.jpg" alt="Page Not Found"/>
        </Container>
        
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default PageNotFound