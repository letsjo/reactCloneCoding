import React from "react";
import CategoryBar from "../components/CategoryBar";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../redux/actions/itemsAction";
import { itemsSliceAction } from "../redux/reducers/itemsReducer";
import { useParams } from "react-router-dom";
import ProductLists from "../components/ProductLists";
const Home = () => {
  const params = useParams();
  const tmp_params = params.category?.replace(/&/g,"%26").replace(/\+/g,"%2B");
  
  const [categoryId, setCategoryId] = React.useState("ALL");
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();
  
  const { productsInfo, totalCount, loading } = useSelector(
    (state) => state.itemsReducer
  );

  React.useEffect(() => {
    setCategoryId(tmp_params?tmp_params:"ALL");
    dispatch(itemsAction.loadItemsList({ page, categoryId }));
  }, [page,categoryId,tmp_params]);

  return (
    <HomeFrame>
      <HomeCategoryArea>
        <CategoryBar params={params} setCategoryId={setCategoryId}/>
      </HomeCategoryArea>
      <ProductLists loading={loading} productsInfo={productsInfo} totalCount={totalCount} page={page} setPage={setPage}/>
    </HomeFrame>
  );
};

const HomeFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 2000px;
  position: relative;
  top: 0;
  width: 100%;
  @media screen and (max-width: 990px) {
    position: relative;
    flex-direction: column;
    width: 95%;
  }
`;

const HomeCategoryArea = styled.div`
  height: auto;
  width: 180px;
  max-width: 180px;
  margin-left: 5rem;
  @media screen and (max-width: 990px) {
    width: 100%;
    max-width: none;
    margin-bottom: 1rem;
    margin-left: 0rem;
    max-width: none;
  }
`;

export default Home;
