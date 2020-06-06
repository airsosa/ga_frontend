import React, { Component } from 'react';
import axios from 'axios';

function Hero(props) {
  return (
    <main className="hero">
      <h1>{props.header}</h1>
      <p>{props.body}</p>
    </main>
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {'title': '', 'body': ''},
    };
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api')
    .then(res => {
      console.log(res.data);
      this.setState({
        hero: {'title': res.data[0].title, 'body': res.data[0].body},
      })
    });
  }
  render() {
    return(
      <div>
        <Hero 
        header={this.state.hero.title} 
        body={this.state.hero.body} 
        />
      </div>
    );
  }
}
