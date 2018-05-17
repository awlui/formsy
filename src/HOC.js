import React from 'react';

export default function(Comp) {
  return class _Pure extends React.Component {
    componentDidMount = () => {
    this.shouldComponentUpdate = (() => {
      let prev;

      return (prevProps, prevState) => {
        if (prev !== this.props.getValue()) {
          prev = prevProps.getValue();
          return true;
        }
        return false;
      }
    })();

    }
    render = () => (<Comp {...this.props} />)
  }
}

