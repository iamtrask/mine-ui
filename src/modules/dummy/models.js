const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const models = [
  {
    id: guid(),
    name: 'Facebook Post Sentiment',
    isPrivate: true,
    author: 'Facebook, Inc.',
    bounty: 4000,
    requests: {
      profile: 'all',
      posts: 'adapter-1'
    }
  },
  {
    id: guid(),
    name: 'Cat Image Classifier',
    isPrivate: true,
    author: 'Google, Inc.',
    bounty: 7500,
    requests: {
      photos: 'adapter-1'
    }
  },
  {
    id: guid(),
    name: 'Geonomic Classifier',
    isPrivate: false,
    author: '23 & Me, Inc.',
    bounty: 30000,
    requests: {
      profile: 'all',
      health: {
        geonome: 'adapter-7'
      }
    }
  },
  {
    id: guid(),
    name: 'Tweet Sentiment Predictor',
    isPrivate: true,
    author: 'Cato Institute',
    bounty: 10000,
    requests: {
      profile: 'all',
      posts: 'adapter-2'
    }
  },
  {
    id: guid(),
    name: 'Donald Trump Tweet Predictor',
    isPrivate: false,
    author: 'Kevin Kerr',
    bounty: 2000,
    requests: {
      posts: 'adapter-2'
    }
  },
  {
    id: guid(),
    name: 'US Congress Bill NLP Analysis',
    isPrivate: true,
    author: 'Poliana',
    bounty: 4000,
    requests: {
      posts: 'all'
    }
  }
];

export default models;
