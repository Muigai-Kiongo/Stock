import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.length === 0 ? (
        <p>Your portfolio is empty.</p>
      ) : (
        portfolio.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            onSell={onSellStock}
            isInPortfolio={true} 
          />
        ))
      )}
    </div>
  );
}

export default PortfolioContainer;
