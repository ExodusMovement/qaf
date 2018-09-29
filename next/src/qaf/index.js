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

  // TODO: make it more stable
  // https://stackoverflow.com/a/50019873/5470921
  Store.dispatch = ({ type, ...payload }) => {
    if (!Store.ref.current) {
      throw new Error(
        `Action \`${type}\` was fired without a valid store reference or before the store is mounted (too early).`
      )
    }

    if (!Store.ref.current[type]) {
      throw new Error(
        `Action \`${type}\` doesn't exist in the store. Double-check the action name.`
      )
    }

    if (typeof Store.ref.current[type] !== 'function') {
      throw new Error(`Action \`${type}\` is not a function.`)
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
