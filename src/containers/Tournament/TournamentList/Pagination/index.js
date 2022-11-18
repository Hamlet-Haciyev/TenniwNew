import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
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
  const filterKeys = useSelector((state) => state.tournament.filterKeys);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);
  useEffect(() => {
    setItemOffset(0);
  }, [filterKeys]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <PaginationWrapper>
      <Items currentItems={currentItems} />
      <div className="end">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          pageLinkClassName={"pagination-item"}
          activeLinkClassName={"pagination-item active"}
          previousLinkClassName={"pagination-item"}
          nextLinkClassName={"pagination-item"}
        />
      </div>
    </PaginationWrapper>
  );
};
const PaginationWrapper = styled.div`
  .end {
    display: flex;
    justify-content: end;
  }
  .pagination {
    display: flex;
    align-items: center;
    list-style-type: none;
    background-color: white;
    border-radius: 15px;
    padding: 0;
    height: 42px;
    .pagination-item {
      padding: 3px 8px;
      cursor: pointer;
      margin: 0 5px;
      border-radius: 50%;
      color: #000;
      font-family: "Manrope";
      font-size: 14px;

      &.active {
        color: #fff;
        background: #0067ff;
      }
    }
  }
`;
