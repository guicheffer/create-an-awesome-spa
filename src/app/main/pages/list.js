import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Helmet } from 'react-helmet'

// eslint-disable-next-line no-undef
const browser = window

class Listing extends Component {
  render () {
    return (
      <div className="panel__list">
        <Helmet>
          <title> Items - { this.metaTitle } </title>
        </Helmet>

        <table className="list__content">
          <thead>
            <tr>
              <th> Name </th>
              <th> Delete? </th>
            </tr>
          </thead>

          <tbody>
            { this.props.items.map((item, key) => this._createRow(item, key)) }
          </tbody>
        </table>
      </div>
    )
  }

  _createRow (item, key) {
    return (
      <tr key={key}>
        <td> {item.name} </td>
        <td> ❌ </td>
      </tr>
    )
  }

  componentWillMount () {
    const { metaTitle } = browser.getInitializationData()
    this.metaTitle = metaTitle
  }
}

const mapStateToProps = state => ({ items: state.items })

export default connect(
  mapStateToProps,
  () => ({}),
)(Listing)
