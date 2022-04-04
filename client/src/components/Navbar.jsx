import React from "react";
import styled from "styled-components";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { device } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../src/redux/apiCalls";

const Container = styled.div`
  height: 60px;
  @media ${device.sm} {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.sm} {
    padding: 10px 10px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media ${device.sm} {
    display: none;
  }
`;
const SearchContainer = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  @media ${device.sm} {
    width: 50px;
  }
  &:focus {
    outline: none;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  @media ${device.sm} {
    font-size: 24px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.sm} {
    flex: 2;
    justify-content: center;
  }
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  @media ${device.sm} {
    font-size: 12px;
    margin-left: 10px;
  }
`;
const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const Navbar = () => {
  const dispatch = useDispatch();
  const handleDelete = (user) => {
    logout(dispatch, user);
  };
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <MdSearch style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={linkStyle}>
            <Logo>MadeDay</Logo>
          </Link>
        </Center>
        <Right>
          <Link to={`/products/clothes`} style={linkStyle}>
            <MenuItem>Products</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <MenuItem onClick={() => handleDelete()}>Sign out</MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="error">
                <MdShoppingCart style={{ fontSize: 30, color: "#cd8fa3" }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
