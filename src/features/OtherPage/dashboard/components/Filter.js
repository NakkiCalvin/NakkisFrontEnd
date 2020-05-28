import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import InputRange from 'react-input-range';
import styleBar from 'react-input-range/lib/css/index.css';
import MediaQuery from 'react-responsive';
import Checkbox from './Checkbox';
import styles from '../stylesheets/filter.module.sass';
import generateFilterString from '../utils/generateFilterString';
import device, { size } from '../../../../modules/mediaQuery';
import Filter_md from './Filter_md';

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.FILTER_CONFIG = {
      order: ['Ascending', 'Descending'],
      department: ['Men', 'Women'],
      // price: ['Less Than $29', '$29 - $39', '$39 - $49', '$49 - $89', 'Greater Than $89'],
      size: ['36', '37', '38', '39', '40', '41', '42'],
    }
    this.initialState = { valueBar: { min: 0, max: 999 }, }
    this.state = this.initialState
  }
  handleChange = (e, category, name) => {
    let tagName = ''
    let isChecked = false
    //handle div click
    if (name) {
      tagName = name.toUpperCase()
      isChecked = !!!(this.state[category] && this.state[category].includes(name))
    } else {
      // handle input checkbox
      tagName = e.target.name.toUpperCase()
      isChecked = e.target.checked
    }
    this.setState(prevState => {
      //add category value to array
      if (isChecked) {
        //user can only select one order
        if (category === 'order') {
          return {
            [category]: [tagName]
          }
        }
        if (category === 'department') {
          return {
            [category]: [tagName]
          }
        }
        // if (category === 'price') {
        //   return {
        //     [category]: [tagName]
        //   }
        // }
        if (category === 'size') {
          return {
            [category]: [tagName]
          }
        }

        return {
          [category]: [...prevState[category] || [], tagName]
        }
      } else {
        //remove category value from array
        const new_prop_array = prevState[category].filter(n => n !== tagName)
        return {
          [category]: new_prop_array
        }
      }
    }, () => {
      this.props.applyFilters(generateFilterString(this.state))
    })
  }
  handleCloseTag = (category, name) => {
    this.setState(prevState => {
      const new_prop_array = prevState[category].filter(n => n !== name)
      return {
        [category]: new_prop_array
      }
    }, () => this.props.applyFilters(generateFilterString(this.state)))
  
  }
  clearAllFilter = () => {
    this.setState({ order: [], size: [], department: [], valueBar: { min: 0, max: 999 } }, () => this.props.applyFilters(''))
  }

  handleChangeValueBar = value => {
    console.log('value', value);
    this.setState(prevState => {
              return {
                ['valueBar']: value
              }
        })
  }

  render() {
    console.log('STATEEE', this.state);
    return (
      <div>
        <MediaQuery query={device.min.tablet}>
          <div className={styles.outbox}>
            <div className={styles.box}>
              <div className={styles.title}>
                FILTERS
          <div className={styles.title_border}></div>
              </div>
              <div className={styles.content}>
                {/* order */}
                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    ORDER
                  </div>
                  {this.FILTER_CONFIG['order'].map(n =>
                    <Checkbox
                      key={n}
                      onChange={this.handleChange}
                      name={n}
                      category='order'
                      isChecked={this.state['order'] && this.state['order'].includes(n.toUpperCase()) || false}
                    />
                  )}
                </div>
                {/* department */}
                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    DEPARTMENT
                  </div>
                  {this.FILTER_CONFIG['department'].map(n =>
                    <Checkbox
                      key={n}
                      onChange={this.handleChange}
                      name={n}
                      category='department'
                      isChecked={this.state['department'] && this.state['department'].includes(n.toUpperCase()) || false}
                    />
                  )}
                </div>
                {/* price
                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    PRICE
                  </div>
                  {this.FILTER_CONFIG['price'].map(n =>
                    <Checkbox
                      key={n}
                      onChange={this.handleChange}
                      name={n}
                      category='price'
                      isChecked={this.state['price'] && this.state['price'].includes(n.toUpperCase()) || false}
                    />
                  )}
                </div> */}

                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    SIZE
                  </div>
                  {this.FILTER_CONFIG['size'].map(n =>
                    <Checkbox
                      key={n}
                      onChange={this.handleChange}
                      name={n}
                      category='size'
                      isChecked={this.state['size'] && this.state['size'].includes(n.toUpperCase()) || false}
                    />
                  )}
                </div>
                
                <InputRange 
                  formatLabel={value => `${value} $`}
                  maxValue={999}
                  minValue={0}
                  value={this.state.valueBar}
                  onChangeComplete={() => {
                    this.props.applyFilters(generateFilterString(this.state))
                  }} 
                  onChange={this.handleChangeValueBar} 
                />
              </div>
              <div style={{ marginTop: '25px' }} className={styles.clear_btn} onClick={this.clearAllFilter}>
                <button>Clear All</button>
              </div>
              {/* filter tags */}
              <div className={styles.tags}>
                {
                  Object.keys(this.state).map(c => (

                    (this.state[c] && c !== 'valueBar') && this.state[c].map(n => (
                      <div key={n} className={styles.tag}>
                        <div className={styles.tag_content}>
                          {n}
                        </div>
                        <div
                          className={styles.tag_close}
                          onClick={() => this.handleCloseTag(c, n)}
                        >
                          x
                      </div>
                      </div>
                    )))
                    )}
              </div>
            </div>
          </div>
        </MediaQuery >
        <MediaQuery query={device.max.tablet}>
          <Filter_md
            applyFilter={() => {
              this.props.applyFilters(generateFilterString(this.state))
            }}
            valueBarState={this.state.valueBar}
            valueBarHandleChange={this.handleChangeValueBar}
            onChange={this.handleChange}
            clear={this.clearAllFilter}
            configs={this.FILTER_CONFIG}
            selected_name={this.state}
          />
        </MediaQuery>
      </div >
    )
  }
}
