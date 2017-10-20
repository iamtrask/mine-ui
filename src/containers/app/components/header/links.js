export default {
  left: [
    {
      name: 'My Mine',
      to: '/mine',
      authRequired: true
    },
    {
      name: 'Schema',
      to: '/mine/schema',
      authRequired: true
    },
    {
      name: 'Adapters',
      to: '/mine/adapters',
      authRequired: true
    },
    {
      name: 'Bounties',
      to: '/mine/bounties',
      authRequired: true
    }
  ],
  right: [
    {
      name: 'Login',
      to: '/',
      button: true,
      unauthRequired: true
    },
    {
      name: 'Logout',
      to: '/logout',
      button: true,
      authRequired: true
    }
  ]
};
