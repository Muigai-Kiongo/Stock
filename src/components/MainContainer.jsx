import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterType, setFilterType] = useState("All");

  const handleBuyStock = (stock) => {
    setPortfolio((prevPortfolio) => [...prevPortfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((s) => s.id !== stock.id)
    );
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleFilterChange = (filterOption) => {
    setFilterType(filterOption);
  };

  return (
    <div>
      <SearchBar onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
      <div className="row">
        <div>
          <StockContainer onBuyStock={handleBuyStock} sortBy={sortBy} filterType={filterType} />
        </div>
        <div>
          <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
