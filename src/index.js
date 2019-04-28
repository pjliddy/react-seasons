import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// class-based component
class App extends React.Component {
  // initialize state directly outside of constructor
  state = { lat: null, errorMessage: '' };

  // helper function
  renderContent() {
    // Success
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // Failure (make error state component?)
    if (!this.state.lat && this.state.errorMessage) {
      return<div> Error: {this.state.errorMessage}</div>;
    }

    // Loading
    return <Loader msgText='Please allow location request...'/>;
  }

  // lifecycle methods
  render() {
    return(
      <div className="ui">{this.renderContent()}</div>
    );
  }

  componentDidMount() {
    // update state using this.setState()
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
