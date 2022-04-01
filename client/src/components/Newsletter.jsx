import { MdSend } from "react-icons/md";
import styled from "styled-components";
import { device } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #ebe1d3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media ${device.sm} {
    text-align: center;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media ${device.sm} {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #4b7674;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #759695;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MdSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
