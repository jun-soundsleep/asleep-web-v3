import { WEB_ROUTING } from '../../../../util/routing';

export const GNB_DATA = [
  {
    page: 'Sleeptrack API',
    subCategory: [
      { id: 0, title: 'Sleeptrack', link: WEB_ROUTING.main },
      { id: 1, title: 'Sleeptrack', link: WEB_ROUTING.main }
    ]
  },
  {
    page: 'Solutions',
    subCategory: [
      { id: 1, title: 'Solutions', link: WEB_ROUTING.solutions },
      { id: 0, title: 'Solutions', link: WEB_ROUTING.solutions }
    ]
  },
  {
    page: 'Sleeptech',
    subCategory: [
      { id: 0, title: 'Sleeptech', link: WEB_ROUTING.sleeptech },
      { id: 1, title: 'Sleeptech', link: WEB_ROUTING.solutions }
    ]
  },
  {
    page: 'Company',
    subCategory: [
      { id: 0, title: 'Company', link: WEB_ROUTING.company },
      { id: 1, title: 'Company', link: WEB_ROUTING.company }
    ]
  }
];
