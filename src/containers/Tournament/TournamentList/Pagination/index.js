import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import TournamentItem from "../TournamentItem";
const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => {
          return <TournamentItem key={item.id} tournament={item} />;
        })}
    </>
  );
};

export const PaginatedItems = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <PaginationWrapper>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageLinkClassName={"pagination-item"}
        activeLinkClassName={"pagination-item active"}
        previousLinkClassName={"pagination-item"}
        nextLinkClassName={"pagination-item"}
      />
    </PaginationWrapper>
  );
};
const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    list-style-type: none;
    position: fixed;
    bottom: 50px;
    left: 270px;
    .pagination-item {
      background-color: white;
      border: 1px solid #d9d9d9;
      padding: 5px 10px;
      margin-bottom: 0;
      cursor: pointer;
      margin: 0 5px;
      border-radius: 2px;
      color: #000;
      &.active {
        border: 1px solid #1890ff;
        color: #1890ff;
      }
    }
  }
`;
