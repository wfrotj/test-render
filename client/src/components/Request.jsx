import React from "react";

function Request() {
  return (
    <div>
      <h2>Request Page</h2>
      <div>
        <form onSubmit={handleRequest}>
          <input
            type="text"
            placeholder="items"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
          <input
            type="text"
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Request;
