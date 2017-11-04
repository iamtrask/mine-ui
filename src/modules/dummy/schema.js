const schema = {
  profile: {
    names: {
      primary: 'Mr. Jack Stratton',
      aliases: []
    },
    gender: 'Cisgender Male',
    sex: 'Male',
    sexuality: null,
    birthdate: '051192',
    languages: ['English', 'Spanish']
  },
  contactInfo: {
    emails: ['jack.stratton@gmail.com', 'thevulf@vulfpeck.com'],
    phones: ['13729424403'],
    handles: [
      {
        type: 'adapter-1',
        value: 'info#handle'
      },
      {
        type: 'adapter-2',
        value: 'info#handle'
      },
      {
        type: 'adapter-4',
        value: 'info#handle'
      }
    ],
    websites: ['https://www.vulfpeck.com']
  }
};

export default schema;
