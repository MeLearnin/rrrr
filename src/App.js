import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sdfa1', name: 'yaron', age: 27 },
      { id: 'sdr32f', name: 'manu', age: 28 },
      { id: 'sd21d1', name: 'steph', age: 29 }
    ],
    someOtherStart: 'other states',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // gets the first index that anwers the condition
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    });

    // gets the person in this index
    const person = {
      ...this.state.persons[personIndex]
    };

    // changes the persons name
    person.name = event.target.value;

    // updates the array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2 ) {
      classes.push('red'); // classes = ['red']
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, im react app</h1>
        <p className={classes.join(' ')}>this is realy working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;


//hooks

// const app = (props) => {

//   const [personState, setPersonState] = useState({
//     person: [
//       { name: 'yaron', age: 27 },
//       { name: 'manu', age: 28 },
//       { name: 'steph', age: 29 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('other states');

//   console.log(personState,otherState)

//   const switchNameHandler = () => {
//     setPersonState( {
//       person: [
//         { name: 'yaronKing123', age: 27 },
//         { name: 'manu', age: 28 },
//         { name: 'steph', age: 65 }
//       ]
//     } )
//   }
  
//     return (
//       <div className="App">
//         <h1>Hi, im react app</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name ={personState.person[0].name}  age={personState.person[0].age}/> 
//         <Person name ={personState.person[1].name} age={personState.person[1].age}>hobbies: sleeping </Person>
//         <Person name ={personState.person[2].name} age={personState.person[2].age}/>
//       </div>
//     );
//   }


// export default app;
