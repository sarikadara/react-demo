import React from 'react';

class App extends React.Component {
  
  render() {
   return (
    <Buttons>
      <button value="A">A</button>
      <button value="B">B</button>
      <button value="c">C</button>
    </Buttons>


 
   )
  } 
}
class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}

  }
  SelectItem(selected) {
    this.setState({selected})
  }
  render(){
    let fn = child => 
     
     React.cloneElement(child, {
     onClick: this.SelectItem.bind(this,child.props.value)
     })

    let items = React.Children.map(this.props.children, fn);
    return(
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}
export default App