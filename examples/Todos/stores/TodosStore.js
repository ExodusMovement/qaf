import { createStore } from '../../../src';

export default class TodosStore extends createStore() {
  state = {
    todos: [
      { id: Date.now(), title: 'Hello World!', completed: true },
      { id: Date.now() + 1, title: 'Hello React!', completed: true },
      { id: Date.now() + 2, title: 'Hello Qaf!', completed: false }
    ],

    active: () => this.state.todos.filter(todo => !todo.completed),
    completed: () => this.state.todos.filter(todo => todo.completed),

    add: title =>
      this.setState(state => ({
        todos: [...state.todos, { id: Date.now(), title, completed: false }]
      })),

    toggle: id =>
      this.setState(state => ({
        todos: state.todos.map(
          todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),

    remove: id =>
      this.setState(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),

    clear: () => this.setState({ todos: [] })
  };
}
