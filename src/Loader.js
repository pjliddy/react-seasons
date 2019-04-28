import React from 'react';

// functional component
const Loader = props => {
  return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.msgText}</div>
      </div>
  )
}

// default props
Loader.defaultProps = {
  msgText: 'Loading...'
}

export default Loader;
