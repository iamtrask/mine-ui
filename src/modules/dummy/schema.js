const profile = {
  names: {
    primary: {
      prefix: 'Mr.',
      first: 'Jack',
      middle: null,
      last: 'Stratton',
      suffix: null
    },
    aliases: [],
    maidenName: null
  },
  gender: 'Cisgender Male',
  sex: 'Male',
  sexuality: null,
  birthdate: {
    day: 11,
    month: 5,
    year: 1992
  },
  languages: [
    {
      name: 'English',
      proficiency: 'Fluent'
    },
    {
      name: 'Spanish',
      proficiency: 'Conversational'
    }
  ]
};

const contactInfo = {
  emails: ['jack.stratton@gmail.com', 'thevulf@vulfpeck.com'],
  phones: ['13729424403'],
  handles: [
    {
      adapter: true,
      type: 'adapter-1',
      value: 'info#handle'
    },
    {
      adapter: true,
      type: 'adapter-2',
      value: 'info#handle'
    },
    {
      adapter: true,
      type: 'adapter-4',
      value: 'info#handle'
    }
  ],
  websites: ['https://www.vulfpeck.com']
};

const relationships = [
  {
    adapter: true,
    type: 'adapter-1',
    value: 'friends'
  },
  {
    adapter: true,
    type: 'adapter-4',
    value: 'connections'
  },
  {
    name: 'Nancy Stratton',
    relation: 'Mother',
    contact: {
      email: 'nstratton@gmail.com',
      phone: '13729424404',
      website: null
    }
  }
];

const education = [
  {
    adapter: true,
    type: 'adapter-4',
    value: 'education'
  },
  {
    institution: 'Vanderbilt University',
    dateRange: [1091318400, 1209600000],
    areaOfStudy: 'Biology',
    levelOfDegree: 'Bachelors'
  }
];

const employment = [
  {
    adapter: true,
    type: 'adapter-4',
    value: 'employment'
  },
  {
    organization: 'DevDigital',
    dateRange: null,
    location: 'Los Angeles, CA',
    jobTitle: 'Director of Product'
  }
];

const posts = [
  {
    adapter: true,
    type: 'adapter-1',
    value: 'posts'
  },
  {
    adapter: true,
    type: 'adapter-2',
    value: 'tweets'
  },
  {
    adapter: true,
    type: 'adapter-4',
    value: 'posts'
  }
];

const messages = [
  {
    adapter: true,
    type: 'adapter-1',
    value: 'messages'
  },
  {
    adapter: true,
    type: 'adapter-4',
    value: 'direct-messages'
  }
];

const location = {
  static: {
    currentCity: 'Los Angeles, CA',
    hometown: 'Detroit, MI',
    birthplace: 'Detroit, MI',
    citiesLivedIn: ['Detroit, MI', 'Nashville, TN', 'Los Angeles, CA'],
    citiesVisited: null
  },
  dynamic: [
    {
      adapter: true,
      type: 'adapter-3',
      value: 'location'
    }
  ]
};

const search = [
  {
    adapter: true,
    type: 'adapter-3',
    value: 'history'
  }
];

const health = {
  weight: [
    {
      adapter: true,
      type: 'adapter-5',
      value: 'weight'
    }
  ],
  height: null,
  bmi: null,
  bloodPressure: null
};

const schema = {
  profile
  // contactInfo,
  // relationships,
  // education,
  // employment,
  // posts,
  // messages,
  // location,
  // search,
  // health
};

export default schema;
