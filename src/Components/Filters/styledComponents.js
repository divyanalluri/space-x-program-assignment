import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 200px;
  max-height: 700px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-radius: 7px;
  margin-top: 5px;
`;

export const Heading = styled.h3`
  margin: 0px;
  align-self: flex-start;
`;

export const YearsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
