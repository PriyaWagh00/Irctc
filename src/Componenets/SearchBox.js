
import React from 'react';
import "../styles/serchbox.css";

function SearchBox() {
  return (
    <div className="search-box-container">
      <div className="form-container">
        <form>
          <h2>Book Ticket</h2>
          <input type="text" placeholder="From" required />
          <input type="text" placeholder="To" required />
          <input type="date" placeholder="Travel Date" required />
          <select>
            <option value="general">GENERAL</option>
            <option value="ac">AC Class</option>
            <option value="sleeper">Sleeper</option>
          </select>
          <button type="submit">Search Trains</button>
        </form>
      </div>
      <div className="info-container">
        <h2>Book Ticket</h2>
        <h2>Or</h2>
        <h2>Search Trains</h2>
      </div>
    </div>
  );
}

export default SearchBox;