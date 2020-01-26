import React, {Component} from 'react';

//make new context
const MyContext = React.createContext();

//make provider component, Data lives here
class MyProvider extends Component 
{
  state={
    name: "Raad",
    age: 25,
    cool: true
  }

  render()
  {
    return(
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age+1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }

}

const Family = (props) =>
{
  return(
    <div className="family">
      <Person/>
    </div>
  );
}
class Person extends Component 
{
  render()
  {
    return(
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <div>
              <p>I'm inside consumer {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>Increase Age</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
class App extends Component 
{
  render()
  {
    return(
      <MyProvider>
        <div>
          <p>I'm Raad</p>
          <Family/>
        </div>
      </MyProvider>
     
    );
  }
}

export default App;
