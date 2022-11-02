import styled from 'styled-components'


export const Container = styled.div`
    // padding:2px 6px;
    margin:0px 10px;
`


export const Division = styled.div`
   @media (min-width: 500px) {
    ${Container}{
        display: none;
    }

`