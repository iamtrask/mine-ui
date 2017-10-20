export default {
  left: [
    {
      name: 'Dashboard',
      to: '/dashboard',
      authRequired: true
    },
    {
      name: 'Dashboard About',
      to: '/dashboard/about',
      authRequired: true
    }
  ],
  right: [
    {
      name: 'Login',
      to: '/login',
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
