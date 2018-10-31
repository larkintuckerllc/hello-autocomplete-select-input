import stateData from './stateData';

const stateNames = stateData.map(state => state.name);

const filterStates = value => stateNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
);

const fetchStates = (value) => {
  const promise = new Promise((resolve) => {
    const filteredStates = value === ''
      ? []
      : filterStates(value);
    setTimeout(() => resolve(filteredStates), 400);
  });
  return promise;
};


export default fetchStates;
