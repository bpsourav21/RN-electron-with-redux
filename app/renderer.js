// @flow

import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import App from './App'
const root = document.getElementById('app')

const renderApp = () => {
  if (root) render(<App />, root)
}

renderApp()

if (module && module.hot != null && typeof module.hot.accept === 'function') {
  module.hot.accept(['./App'], () =>
    setImmediate(() => {
      unmountComponentAtNode(root)
      renderApp()
    }),
  )
}
