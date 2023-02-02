import React, { Component } from 'react';
import CardCreator from '../components/CardCreator.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      title: '',
      body: '',
      to: '',
      from: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('./cards', {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          cards: data,
        })
      );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <CardCreator
          cards={this.state.cards}
          title={this.state.title}
          body={this.state.body}
          to={this.state.to}
          from={this.state.from}
        />
        <form>
          Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="title-input"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </form>
        <form>
          Body: &nbsp;&nbsp;
          <input
            className="body-input"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </form>
        <form>
          To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="to-input"
            name="to"
            value={this.state.to}
            onChange={this.handleChange}
          />
        </form>
        <form>
          From:&nbsp;&nbsp;&nbsp;
          <input
            className="from-input"
            name="from"
            value={this.state.from}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default MainContainer;
