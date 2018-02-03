import React, {Component} from 'react'

class Listings extends Component {
  constructor () {
    super ()
    this.state = {
      name: "michal"
    }
   
    this.loopListings = this.loopListings.bind(this)
  }

loopListings () {

  const {listingsData} = this.props

  return listingsData.map((listing, index) => {
   return <div className='listing' key={index}>
      <div className='listing-image' style={{background:`url("${listing.image}") no-repeat center center`}}>
        <div className='details'>
          <div className='user'>
            <div className='user-img' />
            <div className='user-details'>
              <span className='user-name'>Nina Smith</span>
              <span className='post-date'>05/01/2018</span>
            </div>
          </div>
          <div className='listing-details'>
            <div className='floor-space'>
              <i className='fa fa-square-o' aria-hidden='true' />
              <span>{listing.space} m&sup2;</span>
            </div>
            <div className='bedrooms'>
              <i className='fa fa-bed' aria-hidden='true' />
              <span>{listing.rooms} bedrooms</span>
            </div>
          </div>
        </div>
        <span className='address'>{listing.city}</span>
      </div>
      <div className='bottom-info'>
        <span>£{listing.price}</span>
        <span>
          <i className='fa fa-map-marker' aria-hidden='true' />{listing.city}
          </span>
      </div>
    </div>
  })
}

  render () {
    return (

      <section id='listings'>

        <div className='search-and-sort'>
          <section className='search-area'>
            <input type='text' name='search' />

            <div className='results'>390 results found</div>
          </section>

          <section className='sortby-area'>
            <div className='view'>
              <i className='fa fa-th-list' aria-hidden='true' />
              <i className='fa fa-th' aria-hidden='true' />
            </div>
            <select name='sortby' className='sortby'>
              <option value='price-asc'>Highest Price</option>
              <option value='price-dsc'>Lowest Price</option>
            </select>

          </section>
        </div>

        <section className='listings-results'>

        {this.loopListings()}
          
        </section>

        <section className='pagination'>

          <ul className='pages'>
            <li>Prev</li>
            <li className='active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>
      </section>

    )
  }
}

export default Listings
