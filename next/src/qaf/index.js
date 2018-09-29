import React from 'react'

export default () => {
  const ctx = React.createContext()

  class Store extends React.PureComponent {
    getState = () => this.state

    render () {
      return <ctx.Provider {...this.props} value={this.state} />
    }
  }

  Store.ref = React.createRef()

  Store.getState = () => Store.dispatch({ type: 'getState' })

  Store.dispatch = ({ type, ...payload }) => {
    if (!Store.ref.current) {
      throw new Error(
        `Action \`${type}\` was fired without a valid store reference or before the store is mounted (too early).`
      )
    }

    return Store.ref.current[type](payload)
  }

  Store.Subscribe = ({ children, render }) => (
    <ctx.Consumer>
      {store => (children ? children(store) : render(store))}
    </ctx.Consumer>
  )

  Store.subscribe = (Comp, prop = 'store') =>
    React.forwardRef((props, ref) => (
      <Store.Subscribe
        render={store => <Comp {...props} {...{ ref, [prop]: store }} />}
      />
    ))

  return Store
}
