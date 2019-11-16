import React from 'react';
import List from './List';
import './app.css'
import STORE from './store'

class App extends React.Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards
  }

  handleDelete = (cardId) => {
    let newLists = this.state.lists.map(list => {
      return { ...list, cardIds: list.cardIds.filter(id => id !== cardId) };
    });

    let { [cardId]: card, ...rest } = this.state.allCards;

    this.setState({
      lists: newLists,
      allCards: rest
    })
  }

  handleAddRandomCard = (listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    let randomCard = newRandomCard();
    let newLists = this.state.lists.map(list => {
      if (list.id === listId) {
        return { ...list, cardIds: [...list.cardIds, randomCard.id] };
      } 
      else {
        return list;
      }
    })

    this.setState({
      lists: newLists,
      allCards: { ...this.state.allCards, [randomCard.id]: randomCard }
    })
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => (
            <List
              onDelete={this.handleDelete}
              onAddRandomCard={this.handleAddRandomCard}
              header={list.header}
              key={list.id}
              listId={list.id}
              cards={list.cardIds.map(id => this.state.allCards[id])} />))}
        </div>
      </main>
    );
  }
}

export default App;