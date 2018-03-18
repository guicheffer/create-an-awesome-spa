import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render () {
    return (
      <table className="panel__list">
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
}

const mapStateToProps = state => ({ items: state.items })

export default connect(
  mapStateToProps,
  () => ({}),
)(List)
