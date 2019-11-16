import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key="a" header="myHeader" cards={[1, 2, 3]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<List key="b" header="AmyHeader" cards={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});