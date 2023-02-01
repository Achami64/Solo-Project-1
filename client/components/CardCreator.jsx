import React, { Component } from 'react';
import '../css/styles.css';
import Cards from './Cards.jsx';

class CardCreator extends Component {
  constructor(props) {
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickAdd() {
    const title = this.props.title;
    const body = this.props.body;
    const to = this.props.to;
    const from = this.props.from;
    console.log('title', this.props.title);
    console.log('body', this.props.body);
    console.log('to', this.props.to);
    console.log('from', this.props.from);

    fetch('./cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: body,
        to: to,
        from: from,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          {
            cards: [...this.props.cards, data],
          }
        )
      );
  }

  handleClickDelete() {}
  render() {
    return (
      <div>
        <Cards cards={this.props.cards} />
        <button className="addCard" onClick={this.handleClickAdd}>
          Add Card
        </button>
        <button className="deleteCard" onClick={this.handleClickDelete}>
          Delete Card
        </button>
      </div>
    );
  }
}

export default CardCreator;
