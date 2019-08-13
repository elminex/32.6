import React from 'react';
import Player from './Player';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});
it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player playerName={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.player__name').text();
  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const scorePassed = 12;
  const playerComponent = shallow(<Player score={scorePassed} />);
  const playerScoreRendered = playerComponent.find('.player__score').text();

  expect(Number(playerScoreRendered)).toEqual(scorePassed);
})

it('callbacks plus fn properly', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player updateScore={mockedOnPlayerScoreChange} />);
  const plusButton = playerComponent.find('.player__button').first();
  plusButton.simulate('click');
  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('callbacks minus fn properly', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player updateScore={mockedOnPlayerScoreChange} />);
  const plusButton = playerComponent.find('.player__button').at(1);
  plusButton.simulate('click');
  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
})