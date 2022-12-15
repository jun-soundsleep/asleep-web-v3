import { WEB_ROUTING } from '../../../util/routing';

export const FOOTER_SECTION_DATA = {
  product: {
    title: 'Product',
    sub: [
      { id: 0, title: 'Sleeptrack API', to: WEB_ROUTING.main },
      { id: 1, title: 'Solutions', to: WEB_ROUTING.solutions }
    ]
  },
  asleep: {
    title: 'ASLEEP',
    sub: [
      { id: 0, title: 'Our Mission', to: WEB_ROUTING.company },
      { id: 1, title: 'Technology', to: WEB_ROUTING.sleeptech },
      { id: 1, title: 'Contact Us', to: WEB_ROUTING.contact }
    ]
  }
};
