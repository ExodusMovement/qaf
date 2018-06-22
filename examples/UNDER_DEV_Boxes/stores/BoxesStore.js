import { createStore } from '../../../src';

export default class BoxesStore extends createStore() {
  state = {
    boxes: [
      { id: 'box-foo', name: 'Foo', x: 128, y: 128, width: 'Foo'.length * 10 },
      { id: 'box-bar', name: 'Bar', x: 256, y: 256, width: 'Bar'.length * 10 },
      { id: 'box-baz', name: 'Baz', x: 512, y: 512, width: 'Baz'.length * 10 }
    ],
    selected: null
  };

  add = (name, selected) =>
    this.setState(state => ({
      boxes: [
        ...state.boxes,
        {
          id: Date.now(),
          name,
          x: selected.x,
          y: selected.y,
          width: name.length * 10
        }
      ]
    }));

  select = id =>
    this.setState(state => ({
      boxes: state.boxes.map(box => ({ ...box, selected: box.id === id }))
    }));

  move = (id, dx, dy) =>
    this.setState(state => ({
      boxes: state.boxes.map(
        box => (box.id === id ? { ...box, x: box.x + dx, y: box.y + dy } : box)
      )
    }));
}
