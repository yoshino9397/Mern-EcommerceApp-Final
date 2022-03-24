import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { device } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  text-align: center;
  @media ${device.sm} {
    padding: 0;
    flex-direction: column;
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
