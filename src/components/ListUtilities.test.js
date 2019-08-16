import React from 'react';
import { shallow, mount } from 'enzyme';
import ListUtilities from './ListUtilities';

it('should render', () => {
  shallow(<ListUtilities />);
});

it('calls sortByName', () => {
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
  const mockedSortByName = jest.fn();
  const playerComponent = shallow(<ListUtilities players={players} sortByName={mockedSortByName} />)
  const sortByName = playerComponent.find('.ListUtilities__sortBtn').first();
  sortByName.simulate('click');
  expect(mockedSortByName).toBeCalled();
});

it('calls sortByScore', () => {
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
  const mockedSortByScore = jest.fn();
  const playerComponent = shallow(<ListUtilities players={players} sortByScore={mockedSortByScore} />)
  const sortByName = playerComponent.find('.ListUtilities__sortBtn').at(1);
  sortByName.simulate('click');
  expect(mockedSortByScore).toBeCalled();
});

it('calls setPointsCount', () => {
  const mockedSetPointsCount = jest.fn();
  const component = mount(<ListUtilities setPointsCount={mockedSetPointsCount} />);
  const input = component.find('input').at(1);
  input.simulate('change');
  expect(mockedSetPointsCount).toBeCalled();
});

it('calls setAutosort', () => {
  const mockedAutoSort = jest.fn();
  const component = mount(<ListUtilities setAutosort={mockedAutoSort} />);
  const input = component.find('input').first();
  input.simulate('change');
  expect(mockedAutoSort).toBeCalled();
})