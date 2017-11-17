import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/home',
    home: true,
  },
  {
    title: 'Dashboard',
    icon: 'nb-keypad',
    link: '/dashboard',
  },
  {
    title: 'Journals',
    icon: 'ion-ios-book-outline',
    link: '/papers',
  },
  {
    title: 'Playlists',
    icon: 'nb-list',
    link: '/papers',
  },
  {
    title: 'Bookmarks',
    icon: 'ion-bookmark',
    link: '/papers',
  },
  {
    title: 'Statistics',
    icon: 'nb-bar-chart',
    link: '/papers',
  },
  {
    title: 'Profile',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    link: '/papers',
  },
  {
    title: 'Admin',
    icon: 'nb-compose',
    link: '/papers',
  },
];
