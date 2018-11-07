import { MenuItem } from '../fw/services/menu.service';

export let adminMenuItems: Array<MenuItem> = [
  {
    text: 'Working List',
    icon: 'fa-dashboard',
    route: 'authenticated/workinglist',
    submenu: null
  },
  {
    text: 'CPC International',
    icon: 'fa-dashboard',
    route: 'authenticated/cpci',
    submenu: null
  },
  {
    text: 'USPTO',
    icon: 'fa-dashboard',
    route: 'authenticated/uspto',
    submenu: null
  },
  {
    text: 'CPC National',
    icon: 'fa-dashboard',
    route: 'authenticated/cpcno',
    submenu: null
  },
  {
    text: 'Admin Transfer',
    icon: 'fa-dashboard',
    route: 'authenticated/admintransfer',
    submenu: null
  },
  {
    text: 'Producer/Consumer',
    icon: 'fa-dashboard',
    route: 'authenticated/producerconsumer',
    submenu: null
  },
  {
    text: 'About',
    icon: 'fa-font',
    route: 'authenticated/about',
    submenu: null
  }
];
