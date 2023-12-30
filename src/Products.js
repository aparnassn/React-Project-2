import styled from "styled-components";

import { ShopData } from "./ShopData";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <Title>Welcome to DC Clothing Shop</Title>

      <ProductsWrapper>
        {ShopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;
