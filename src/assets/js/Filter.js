import React, {Component} from 'react'

class Filter extends Component {
  render () {
    return (
      <section id='filter'>
        <div className='inside'>
          <h4>Filter</h4>

          <select name='neighbourhood' className='filters neighbourhood' onChange={this.props.change}>
            <option>Linwood</option>
            <option>Paisley</option>
          </select>

          <select name='housetype' className=' filters housetype' onChange={this.props.change}>
            <option>Flat</option>
            <option>House</option>
            <option>Bungalow</option>
          </select>

          <select name='bedrooms' className='filters bedrooms' onChange={this.props.change}>
            <option>1 bedroom</option>
            <option>2 bedrooms</option>
            <option>3 bedrooms</option>
            <option>4 and more</option>

          </select>

          <div className='filters price'>
            <span className='title'>Price</span>
            <input type='text' name='min-price' className='min-price' />
            <input type='text' name='max-price' className='max-price' />
          </div>
          <div className='filters floor-space'>
            <span className='title'>Floor Space</span>
            <input type='text' name='min-floor-space' className='min-floor-space' />
            <input type='text' name='max-floor-space' className='max-floor-space' />
          </div>

          <div className='filters extras'>
            <span className='title'>Extras</span>
            <label htmlFor='extras'>
              <span>Ensiute</span>
              <input name='ensiute' value='elevator' type='checkbox' />
            </label>

            <label htmlFor='extras'>
              <span>Fireplace</span>
              <input name='extras' value='fireplace' type='checkbox' />
            </label>

            <label htmlFor='extras'>
              <span>Garage</span>
              <input name='extras' value='garage' type='checkbox' />
            </label>
          </div>
        </div>
      </section>

    )
  }
}

export default Filter
