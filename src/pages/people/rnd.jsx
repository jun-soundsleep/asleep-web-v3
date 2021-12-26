import React from 'react';
import styled from '@emotion/styled';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

const temp = [
  {
    name: '0',
    href: '',
    body: '',
    src: [
      '/images/people/detail/2_Aaron_s_2x.jpg',
      '/images/people/detail/2_Aaron_m_2x.jpg',
      '/images/people/detail/2_Aaron_l_2x.jpg'
    ],
    thumbnail: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ]
  },
  {
    name: '1',
    href: '',
    body: '',
    src: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ],
    thumbnail: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ]
  },
  {
    name: '2',
    href: '',
    body: '',
    src: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ],
    thumbnail: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ]
  },
  {
    name: '2',
    href: '',
    body: '',
    src: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ],
    thumbnail: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ]
  },
  {
    name: '2',
    href: '',
    body: '',
    src: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ],
    thumbnail: [
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
      '/images/people/thumbnail/2_Will_thumb-S_2x.jpg'
    ]
  }
];

function Rnd(props) {
  return (
    <>
      <PeopleDetailPage data={temp} />
    </>
  );
}

export default Rnd;
