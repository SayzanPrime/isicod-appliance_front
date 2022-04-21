import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Navigation',
    isTitle: true
  },
  {
    label: 'Back Office',
    icon: 'terminal',
    subItems: [
      {
        label: 'Appliance',
        link: 'back-office/appliance',
      },
      {
        label: 'Type Appliance',
        link: 'back-office/type-appliance',
      }
    ]
  },
];
