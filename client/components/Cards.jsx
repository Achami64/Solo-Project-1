import React, { Component } from 'react';
import '../css/styles.css';
import CardCreator from './CardCreator.jsx';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: {},
      styles: [
        // 1, white basic placeholder
        {
          id: 1,
          style: {
            backgroundColor: 'lightpink',
            color: 'darkblue',
          },
        },
        {
          id: 2,
          style: {
            backgroundColor: 'purple',
            color: 'lightgray',
            fontFamily: 'Cursive',
            borderBottomColor: 'rgba(0, 0, 0, 0.6)',
            borderTopColor: 'rgba(0, 0, 0, 0.6)',
            borderLeftColor: 'rgba(255, 255, 255, 0.8)',
            borderRightColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50px',
          },
        },
        {
          id: 3,
          style: {
            backgroundColor: 'white',
            color: 'black',
            fontFamily: 'Monospace',
            borderBottomColor: 'darkblue',
            borderTopColor: 'darkblue',
            borderLeftColor: '#FFFF33',
            borderRightColor: '#FFFF33',
            borderRadius: '14px',
          },
        },
        {
          id: 4,
          style: {
            backgroundColor: 'rgb(218, 143, 142)',
            color: 'beige',
            fontFamily: 'Courier',
            borderBottomColor: 'rgb(229, 228, 226)',
            borderTopColor: 'rgb(229, 228, 226)',
            borderLeftColor: 'rgb(241, 226, 109)',
            borderRightColor: 'rgb(241, 226, 109)',
            borderRadius: '10px',
          },
        },
        {
          id: 5,
          style: {
            backgroundColor: 'papayawhip',
            color: 'palevioletred',
            fontFamily: 'Monaco',
            borderBottomColor: 'skyblue',
            borderTopColor: 'skyblue',
            borderLeftColor: 'rgb(50, 150, 255)',
            borderRightColor: 'rgb(50, 150, 255)',
            borderRadius: '14px',
          },
        },
      ],
      index: 0,
    };
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
    let selectedCard, selectedStyle;
    if (event.target.className === "drop-down-menu") {
      selectedCard = this.props.cards.filter(
        ({ body }) => body === event.target.value
      );
      selectedCard = selectedCard[0];
    } else if (event.target.className === "drop-down-menu2") {
      selectedStyle = this.state.styles.filter(
        ({ id }) => id === parseInt(event.target.value)
      );
      selectedStyle = selectedStyle[0];
    }
  
    this.setState({
      selectedCard: selectedCard || this.state.selectedCard,
      index: selectedStyle ? selectedStyle.id - 1 : this.state.index,
    });
  }

  render() {
    const selectedCard = this.state.selectedCard;
    console.log(selectedCard)
    const {title, body, to, from} = this.state.selectedCard;
    return (
      <div>
        <div
          className="main-tainer"
          style={this.state.styles[this.state.index].style}
        >
          <div className="title">{selectedCard.title}</div>
          <div className="body">{selectedCard.body}</div>
          <div className="to-from">
            To: {selectedCard.to}
            <br></br>
            From: {selectedCard.from}
          </div>
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

        <select
          className="drop-down-menu2"
          value={selectedCard.body}
          onChange={this.handleChangeUpdate}
        >
          {this.state.styles.map((style) => {
            return (
              <option key={style.id} value={style.id}>
                {style.id}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Cards;
