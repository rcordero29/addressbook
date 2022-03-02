import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import PeopleCard from './PeopleCard';

class app extends Component {
  constructor() {
    super();
    this.state = {
      arrayOfPeople: [],
    };
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25').then((res) => {
      const arrayOfPeople = res.data.results;
      console.log(arrayOfPeople);
      this.setState({ arrayOfPeople });
    });
  }
  render() {
    return (
      <div className="app">
        <header className="App-header">
          <ol>
            {' '}
            {this.state.arrayOfPeople.map((people, index) => {
              return (
                <PeopleCard
                  key={index}
                  name={people.name.first}
                  picture={people.picture.thumbnail}
                  city = {people.city}
                  dob= {people.dob.age}
                  cell = {people.cell}
                  
                />
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}
export default app;
