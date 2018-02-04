import React, {Component} from 'react'

class Filter extends Component {
  render() {
    return (
      <section id='filter'>
        <div className='inside'>
          <h4>Filter</h4>

          <select
            name='neighbourhood'
            className='filters neighbourhood'
            onChange={this.props.change}>
            <option>Linwood</option>
            <option>Paisley</option>
          </select>

          <select
            name='housetype'
            className=' filters housetype'
            onChange={this.props.change}>
            <option>Flat</option>
            <option>House</option>
            <option>Bungalow</option>
          </select>

          <select
            name='bedrooms'
            className='filters bedrooms'
            onChange={this.props.change}>
            <option>1 bedroom</option>
            <option>2 bedrooms</option>
            <option>3 bedrooms</option>
            <option>4 and more</option>

          </select>

          <div className='filters price'>
            <span className='title'>Price</span>
            <input
              type='text'
              name='min_price'
              className='min_price'
              onChange={this.props.change}
              value={this.props.globalState.min_price}/>
            <input
              type='text'
              name='max_price'
              className='max_price'
              onChange={this.props.change}
              value={this.props.globalState.max_price}/>
          </div>
          <div className='filters floor-space'>
            <span className='title'>Floor Space</span>
            <input
              type='text'
              name='min_floor_space'
              className='min_floor_space'
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}/>
            <input
              type='text'
              name='max_floor_space'
              className='max_floor_space'
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}/>
          </div>

          <div className='filters extras'>
            <span className='title'>Extras</span>
            <label htmlFor='extras'>
              <span>Ensiute</span>
              <input
                name='elevator'
                value='elevator'
                type='checkbox'
                onChange={this.props.change}/>
            </label>

            <label htmlFor='extras'>
              <span>Fireplace</span>
              <input
                name='fireplace'
                value='fireplace'
                type='checkbox'
                onChange={this.props.change}/>
            </label>

            <label htmlFor='extras'>
              <span>Garage</span>
              <input
                name='garage'
                value='garage'
                type='checkbox'
                onChange={this.props.change}/>
            </label>
          </div>
        </div>
      </section>

    )
  }
}

export default Filter
