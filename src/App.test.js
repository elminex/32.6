import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';
import ListUtilities from './components/ListUtilities';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ];
  appComponent.setState({ players, pointsMultiplier: 3 });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0);
  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(8);
});

it('shold add players', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
})

it('should remove players', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ];
  appComponent.setState({ players });
  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove(0);
  const playersCount = appComponent.state('players').length;

  expect(playersCount).toEqual(1);
});

it('should sort by score', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    },
    {
      name: 'Marek',
      score: 6,
    }
  ];
  appComponent.setState({ players });
  const sortByScore = appComponent.find(ListUtilities).prop('sortByScore');
  sortByScore();
  const topPlayer = appComponent.state('players')[0];

  expect(topPlayer.name).toEqual('Marek')
});

it('should sort by name', () => {
  const appComponent = shallow(<App />);
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    },
    {
      name: 'Marek',
      score: 6,
    }
  ];
  appComponent.setState({ players });
  const sortByName = appComponent.find(ListUtilities).prop('sortByName');
  sortByName();
  const topPlayer = appComponent.state('players')[0];
  expect(topPlayer.name).toEqual('Antoś')
});

it('toggles autosorting', () => {
  const appComponent = shallow(<App />);
  const e = {currentTarget: {checked: true}};
  appComponent.setState({ autosort: false });
  const setAutosorting = appComponent.find(ListUtilities).prop('setAutosort');
  setAutosorting(e);
  const autosortState = appComponent.state('autosort');
  expect(autosortState).toEqual(true);
})