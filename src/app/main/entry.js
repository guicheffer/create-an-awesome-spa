/*-
 * ⭐️ MainEntry
 *
 * This is the main entry file for create-an-awesome-spa spa ❤️.
 *
-*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../core/store'

import AbstractEntry from '../core/entry'

import AddItem from './components/add-item'
import List from './pages/list'

// eslint-disable-next-line no-undef
const browser = window

class MainEntry extends AbstractEntry {
  start ({ initilizationData }) {
    this.initilizationData = initilizationData
    this._giveInterviewer2NiceAndBeautifulGiantWelcomeMessages()

    this.ui = {
      app: browser.document.querySelector('#app-create-an-awesome-spa'),
    }

    this.render()
  }

  render () {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <main className="create-an-awesome-spa__panel">
            <AddItem/>

            <Route exact path="/listing/" component={List} />
          </main>
        </ConnectedRouter>
      </Provider>,
      this.ui.app,
    )
  }

  _giveInterviewer2NiceAndBeautifulGiantWelcomeMessages () {
    // eslint-disable-next-line no-console
    console.log(
      this.initilizationData.welcomeMessage.hi,
      'background: #333; color: #FFF; font-size: 12px; padding: 12px;',
      'font-size: 12px; font-style: italic;',
      'font-weight: bold; text-transform: uppercase;',
    )
    // eslint-disable-next-line no-console
    console.log(this.initilizationData.welcomeMessage.link, 'font-weight: bold;', '')
  }
}

export default MainEntry
