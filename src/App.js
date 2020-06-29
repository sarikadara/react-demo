import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '___'}
    this.update = this.update.bind(this)

  }
  update(e) {
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
     <div>
       <textarea
       onkeyPress={this.update}
       onCut={this.update}
       onCopy={this.update}
       onPaste={this.update}
       onFocus={this.update}
       onBlur={this.update}
       onDoubleClick={this.update}
       onTouchStart={this.update}
       onTouchMove={this.update}
       onTouchEnd={this.update}

        cols="30"
        rows="10" />
       <h1>{this.state.currentEvent}</h1>
       
       

      </div>
    )
  }
}

export default App;