import React from 'react'

export default () => {
  const ctx = React.createContext()

  class Store extends React.PureComponent {
    getState = () => this.state

    render () {
      return <ctx.Provider {...this.props} value={this.state} />
    }
  }

  // no support for createRef in Enzyme yet it seems
  // revert to the old API for now

  // Store.ref = React.createRef()

  let storeRef

  Store.ref = ref => {
    storeRef = ref
  }

  const Subscribe = ({ children, render }) => (
    <ctx.Consumer>
      {store => (children ? children(store) : render(store))}
    </ctx.Consumer>
  )

  // implemented like this to preserve displayName
  Store.Subscribe = Subscribe

  Store.withSubscribe = (Comp: React.ReactElement, prop: string = 'store') =>
    React.forwardRef((props, ref) => (
      <Store.Subscribe
        render={store => <Comp {...props} {...{ ref, [prop]: store }} />}
      />
    ))

  // TODO: make tests work

  // TODO: make it more stable
  // https://stackoverflow.com/a/50019873/5470921

  // TODO: make it promise-based (?)
  // TODO: look into supporting middleware (?)
  Store.dispatch = ({ type, ...payload }: { type: string, payload: {} }) => {
    if (!storeRef) {
      throw new Error(
        `Action \`${type}\` was fired without a valid store reference or before the store is mounted (too early).`
      )
    }

    if (!storeRef[type]) {
      throw new Error(
        `Action \`${type}\` doesn't exist in the store. Double-check the action name.`
      )
    }

    if (typeof storeRef[type] !== 'function') {
      throw new Error(`Action \`${type}\` is not a function.`)
    }

    return storeRef[type](payload)
  }

  Store.getState = () => Store.dispatch({ type: 'getState' })

  return Store
}
