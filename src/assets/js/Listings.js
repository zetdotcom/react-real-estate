import React, {Component} from 'react';

class Listings extends Component {
  render() {
    return (

      <section id="listings">
        <section className="search-area">
          <input type="text" name="search"/>
        </section>

        <section className="sortby-area">
          <div>390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </section>

        <section className="listings-results">
          <div className="listing">
            <div className="listing-image">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img"></div>
                <div className="user-details">
                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">Posted on 05/01/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i class="fa fa-square-o" aria-hidden="true"></i>
                    <span>200 m&sup2;</span>
                  </div>

                  <div className="bedrooms">
                    <i class="fa fa-bed" aria-hidden="true"></i>
                    <span>3 bedrooms</span>
                  </div>

                </div>
              </div>
              <div className="bottom-info">
                <span>£600/month</span>
                <span><i class="fa fa-map-marker" aria-hidden="true"></i>Glasgow</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pagination"></section>

        <ul className="pagination-nums">
          <li>Prev </li>
          <li>1 </li>
          <li>2 </li>
          <li>3 </li>
          <li>4 </li>
          <li>Next </li>

        </ul>
      </section>

    );
  }
}

export default Listings;
