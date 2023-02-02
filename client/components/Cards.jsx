import React, { Component } from 'react';
import '../css/styles.css';
import CardCreator from './CardCreator.jsx';

class Cards extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedCard: {},
      }
    this.handleChangeUpdate = this.handleChangeUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({
        selectedCard: this.props.cards[0],
      });
    }
  }

  handleChangeUpdate(event) {
    const selectedCard = this.props.cards.filter(
      ({ body }) => body === event.target.value
    );
    this.setState({
      selectedCard: selectedCard[0],
    });
  }

  render() {
    const { selectedCard } = this.state;
    return (
      <div className="main-tainer">
        {/* image would hopefully go here */}
        <div className="title">{selectedCard.title}</div>
        <div className="body">{selectedCard.body}</div>
        <div className="to-from">
          To:{selectedCard.to}
          <br></br>
          From: {selectedCard.from}
        </div>
        <select
          className="drop-down-menu"
          value={selectedCard.body}
          onChange={this.handleChangeUpdate}
        >
          {this.props.cards.map(({ title, body, to, from }) => {
            return (
              <option key={body} value={body}>
                {title}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Cards;
