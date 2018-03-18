import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-toolbox/lib/button'

import { addItem } from '../modules/items'

// eslint-disable-next-line no-undef
const browser = window
const DEFAULT_MAX_LENGTH = 30

class AddNew extends Component {
  render () {
    return (
      <section className="panel__add-new">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <label htmlFor="name" className="add-new__label"> Add new item </label>
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            className="add-new__input"
            id="name"
            maxLength={DEFAULT_MAX_LENGTH}
            name="name"
            pattern={`[A-Za-z0-9 ]{3,${DEFAULT_MAX_LENGTH}}`}
            placeholder="The item name"
            ref={(input) => { this.input = input }}
            required="required"
            spellCheck="false"
            type="text"
          />

          <Button type="submit" label="Add" raised primary />
        </form>
      </section>
    )
  }

  _afterAdding () {
    this.props.changePage()
    this.input.value = ''
    this.input.focus()
  }

  componentDidMount () { this.input.focus() }

  handleSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    const name = this.input.value

    this.props.addItem({ name })
    this._afterAdding()

    return true
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  changePage: () => {
    if (browser.location.pathname === '/listing/') return { type: null }

    return push('/listing/')
  },
}, dispatch)

export default connect(
  () => ({}),
  mapDispatchToProps,
)(AddNew)
