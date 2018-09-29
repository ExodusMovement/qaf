import React from 'react'

export default () => {
  const ctx = React.createContext()

  class Store extends React.PureComponent {
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

  const Subscriber = ({ children, render }) => (
    <ctx.Consumer>
      {store => (children ? children(store) : render(store))}
    </ctx.Consumer>
  )

  // implemented like this to preserve displayName
  Store.Subscriber = Subscriber

  Store.withSubscriber = (Comp: React.ReactElement, prop: string = 'store') =>
    React.forwardRef((props, ref) => (
      <Store.Subscriber
        render={store => <Comp {...props} {...{ ref, [prop]: store }} />}
      />
    ))

  // TODO: make tests work

  // TODO: make it more stable
  // https://stackoverflow.com/a/50019873/5470921

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

    return new Promise(resolve =>
      storeRef.setState(state => storeRef[type](state, payload), resolve)
    )
  }

  Store.getState = () => storeRef.state

  return Store
}
