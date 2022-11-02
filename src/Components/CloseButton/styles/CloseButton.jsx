import styled from "styled-components";

export const Container = styled.div`
  height: 40px;
  width: 40px;
  margin: 10px 10px 10px auto;
  cursor: pointer;
}
`;


export const Division = styled.div`
   @media (min-width: 500px) {
    ${Container}{
        display: none;
    }

`



