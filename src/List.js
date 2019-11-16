import React from 'react';
import Card from './Card';
import './list.css';

function List(props) {
  return (
    <section className="List" key={props.listId}>
      <button type="button"
        className="List-add-button"
        onClick={() => props.onAddRandomCard(props.listId)}>
        + Add Random Card
      </button>
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(card =>
          <Card onDelete={props.onDelete}
            cardId={card.id}
            key={card.id}
            title={card.title}
            content={card.content} />)}
      </div>
    </section>
  )
}

export default List;