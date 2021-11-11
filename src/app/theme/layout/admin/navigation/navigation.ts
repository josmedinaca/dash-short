import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [

    ]
  },
 
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'almuerzos-page',
        title: 'Alimentario',
        type: 'item',
        url: '/almuerzos',
        classes: 'nav-item',
        icon: 'feather icon-gitlab'
      },
      
      {
        id: 'alojamientos-page',
        title: 'Alojamientos',
        type: 'item',
        url: '/alojamientos',
        classes: 'nav-item',
        icon: 'feather icon-grid'
      },      {
        id: 'transporte-page',
        title: 'Transporte',
        type: 'item',
        url: '/transporte',
        classes: 'nav-item',
        icon: 'feather icon-clipboard'
      },
      
      {
        id: 'sample-page',
        title: 'Economico - Externo',
        type: 'item',
        url: '/pacs',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
