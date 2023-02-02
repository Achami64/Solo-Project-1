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
    if (to.toUpperCase() === 'YOUSUF'.toUpperCase() || from.toUpperCase() === 'YOUSUF' || title.toUpperCase() === 'YOUSUF' || body.toUpperCase() === 'YOUSUF') {
      window.location.reload(true);
      return;
    } 

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
        this.setState({
          cards: [...this.props.cards, data],
        })
      );
    window.location.reload(true);
  }

  handleClickDelete(event) {
    if (event.key === '-') {
      let index = -1;
      for (let i = 0; i < this.props.cards.length; i++) {
        if (this.props.cards[i]['title'] === event.target.value) {
          index = i;
        }
      }
      const title = this.props.cards[index]['title'];
      const body = this.props.cards[index]['body'];
      const to = this.props.cards[index]['to'];
      const from = this.props.cards[index]['from'];

      fetch('./cards', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          body: body,
          to: to,
          from: from,
        }),
      });
    } else {
      return;
    }
    window.location.reload(true);
  }

  render() {
    return (
      <div>
        <Cards
          cards={this.props.cards}
          title={this.props.title}
          body={this.props.body}
          to={this.props.to}
          from={this.props.from}
          selection={this.props.selection}
        />
        <button className="addCard" onClick={this.handleClickAdd}>
          Add Card
        </button>
        <input
          className="delete-input"
          name="delete"
          placeholder="Enter Title of Card to Delete"
          value={this.props.cards['title']}
          onKeyDown={this.handleClickDelete}
        />
      </div>
    );
  }
}

export default CardCreator;
