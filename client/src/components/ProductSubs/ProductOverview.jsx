import React from 'react';
import styled from 'styled-components';

import Styles from './StylesComponent.jsx';
import Selectors from './Selectors.jsx';

const Wrapper = styled.div`
  width: 98%;
  display: flex;
  margin-top: 1vh;
  flex-direction: column;
  justify-content: space-between;
  margin: 3.5vh 0 3.5vh 2vw;

  @media (min-width: 844px) {
    flex-basis 35%;
    display: flex;
    margin-top: 2vh;
    flex-direction: column;
    justify-content: space-between;
    margin: 3.5vh 0 3.5vh 2vw;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #424242;
  &:hover {
    color: #80ccc4;
    cursor: pointer;
  };
`;

const RatingsAnchor = styled.a`
  font-size: .85rem;
  font-weight: 300;
  color: #424242;
  margin-left: .5vw;
  &:hover {
    color: #80ccc4;
    cursor: pointer;
  };
`;

const Category = styled.p`
  margin-top: 2vh;
  font-weight: 300;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-top: -1rem;
`;

const Purchasing = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PurchaseLikeButtons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2.75vh;
`;

const AddToCart = styled.button`
  flex-basis: 82.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 7vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  color: #424242;
`;

const Plus = styled.div`
  font-size: 2rem;
  font-weight: 300;
  &:hover {
    color: #80ccc4;
  };
`;

const Like = styled.button`
  flex-basis: 17.5%;
  height: ${AddToCart.height};
  margin-left: 1.5vw;
  font-weight: bold;
  font-size: 2.1vh;
  background: none;
  border: 1px solid #424242;
  color: #424242;
  &:hover { color: #80ccc4; };
`;

const ProductOverview = ({
  details, styles, skus, getStyleID, price, sale,
}) => (
  <Wrapper>

    <RatingWrapper>
      <Rating>★★★★☆</Rating>
      <RatingsAnchor href="RATINGS">Read all reviews</RatingsAnchor>
    </RatingWrapper>

    <Category>{details.category.toUpperCase()}</Category>

    <Name>{details.name}</Name>

    <Styles styles={styles} price={price} sale={sale} getStyleID={getStyleID} />

    <Purchasing>
      <Selectors skus={skus} />
      <PurchaseLikeButtons>
        <AddToCart>
          <div>ADD TO BAG</div>
          <Plus>+</Plus>
        </AddToCart>
        <Like>☆</Like>
      </PurchaseLikeButtons>
    </Purchasing>

  </Wrapper>
);

export default ProductOverview;
