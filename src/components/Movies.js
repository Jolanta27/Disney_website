import React from 'react';
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="/images/the-mandalorian.jpeg" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`

`
const Wrap = styled.div`

`
