import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

// TEST DATA

const players = [
  {
    name: 'Kunegunda',
    score: 5
  },
  {
    name: 'Antoś',
    score: 0
  }
];

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders players', () => {
  const playerComponent = shallow(<PlayersList players={players} />);
  const expectedPlayersNumber = playerComponent.find(Player).length;

  expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate function', () => {
  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  const firstPlayer = playerComponent.find(Player).first();
  const onPlayerScoreChange = firstPlayer.prop('updateScore');
  onPlayerScoreChange(10);

  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});

it('removes players', () => {
  const mockedOnPlayerRemove = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
  const firstPlayer = playerComponent.find(Player).first();
  const onPlayerRemove = firstPlayer.prop('removePlayer');
  onPlayerRemove();

  expect(mockedOnPlayerRemove).toBeCalledWith(0);
});

it('calls changeName', () => {
  const mockedChangeName = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onNameChange={mockedChangeName} />);
  const player = playerComponent.find(Player).at(1);
  const onNameChange = player.prop('changeName')
  onNameChange();

  expect(mockedChangeName).toBeCalledWith(1)
})