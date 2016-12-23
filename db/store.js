/* Simulate a database */

let store = [
  {
    id: 1,
    type: 'songs',
    attributes: {
      artist: 'Aerosmith',
      title: 'Dream On',
      source: 'http://127.0.0.1:8000/media?name=10023041'
    }
  },
  {
    id: 2,
    type: 'songs',
    attributes: {
      artist: 'Final Fantasy XIII-2',
      title: 'Last Wanderer',
      source: 'http://127.0.0.1:8000/media?name=10034897'
    }
  },
  {
    id: 3,
    type: 'songs',
    attributes: {
      artist: 'Re Zero',
      title: 'Elegy For Rem',
      source: 'http://127.0.0.1:8000/media?name=20502341'
    }
  },
  {
    id: 4,
    type: 'songs',
    attributes: {
      artist: 'Re Zero',
      title: 'Ending Theme',
      source: 'http://127.0.0.1:8000/media?name=21643900'
    }
  },
  {
    id: 5,
    type: 'songs',
    attributes: {
      artist: 'Re Zero',
      title: 'Elegy For Rem - Piano Version',
      source: 'http://127.0.0.1:8000/media?name=21793403'
    }
  }
];

module.exports = store;