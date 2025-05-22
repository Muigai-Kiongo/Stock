import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ onBuyStock, sortBy, filterType }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else if (sortBy === "Price") {
      return a.price - b.price;
    }
    return 0; // Default case
  });

  const filteredStocks = sortedStocks.filter((stock) => {
    return filterType === "All" || stock.type === filterType;
  });

  return (
    <div>
      <h2>Stocks</h2>
      <div className="stock-list">
        {filteredStocks.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            onBuy={onBuyStock}
            onSell={() => {}} 
            isInPortfolio={false} 
          />
        ))}
      </div>
    </div>
  );
}

export default StockContainer;
