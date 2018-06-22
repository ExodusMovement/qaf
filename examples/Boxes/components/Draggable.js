import React from 'react';

export default class Draggable extends React.PureComponent {
  static defaultProps = {
    initialPos: { x: 0, y: 0 }
  };

  state = {
    pos: this.props.initialPos,
    dragging: false,
    rel: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dragging && !prevState.dragging) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }

    if (!this.state.dragging && prevState.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }

  onMouseDown = e => {
    if (e.button !== 0) return;

    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - this.el.current.offsetTop,
        y: e.pageY - this.el.current.offsetLeft
      }
    });

    e.stopPropagation();
    e.preventDefault();
  };

  onMouseUp = e => {
    this.setState({ dragging: false });

    e.stopPropagation();
    e.preventDefault();
  };

  onMouseMove = e => {
    if (!this.state.dragging) return;

    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    });

    e.stopPropagation();
    e.preventDefault();
  };

  el = React.createRef();

  render() {
    const draggableStyle = {
      left: this.state.pos.x,
      top: this.state.pos.y
    };

    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        onDrag={this.props.onDrag}
        onMouseDown={this.onMouseDown}
        ref={this.el}
        style={draggableStyle}>
        {this.props.children}
      </div>
    );
  }
}
