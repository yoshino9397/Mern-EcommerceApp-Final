import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook, MdMail, MdPhone } from "react-icons/md";
import { BsPinterest } from "react-icons/bs";
import { MdRoom } from "react-icons/md";
import {
  FaCcVisa,
  FaTwitter,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDiscover,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { device } from "../responsive";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  @media ${device.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  @media ${device.sm} {
    text-align: center;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
  @media ${device.sm} {
    text-align: center;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  @media ${device.sm} {
    justify-content: space-evenly;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  @media ${device.sm} {
    width: 60px;
    height: 60px;
    margin-top: 20px;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media ${device.sm} {
    display: none;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media ${device.sm} {
    background-color: "#fff8f8";
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.div`
  width: 50%;
  display: flex;
`;

const PayIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #203939;
  font-size: 35px;
  margin-right: 5px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MadeDay</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="2b6684">
            <MdFacebook />
          </SocialIcon>
          <SocialIcon color="dcaab1">
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon color="85aac5">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon color="b33a3a">
            <BsPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MdRoom style={{ marginRight: "10px" }} /> 476 5th Ave, New York,
          10018
        </ContactItem>
        <ContactItem>
          <MdPhone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MdMail style={{ marginRight: "10px" }} /> contact@yoshino.com
        </ContactItem>
        <Payment>
          <PayIcon>
            <FaCcVisa />
          </PayIcon>

          <PayIcon>
            <FaCcMastercard />
          </PayIcon>

          <PayIcon>
            <SiAmericanexpress />
          </PayIcon>

          <PayIcon>
            <FaCcPaypal />
          </PayIcon>

          <PayIcon>
            <FaCcDiscover />
          </PayIcon>
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
