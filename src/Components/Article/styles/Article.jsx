import styled from "styled-components";

export const Title = styled.h1`
  color: black;
  letter-spacing: 1px;
  // text-decoration: underline;
  margin: 0;
  font-size: 20px;
`;

export const Date = styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #6d6d6d;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  margin: auto;
  border-radius: 20px;
`;

export const ImageDiv = styled.div`
  width: 400px;
  height: 60%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
`;

export const Hr = styled.hr`
  background-color: grey;
`;

export const Summery = styled.p``;

export const Container = styled.div`
  width: 85%;
  background-color: white;
  // border: 1px solid black;
  padding: 0px 8px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid grey;
  box-shadow: 1px 2px 2px gray;
  border: 1px solid black;
  padding: 20px 12px;
  border-radius: 4px;

  @media screen and (min-width: 680px) {
    flex-direction: row;
    justify-content: space-between;

    ${ImageContainer} {
      width: 40%;
      margin-right: 40px;
    }

    ${InfoContainer} {
      width: 60%;
    }
  }
`;
