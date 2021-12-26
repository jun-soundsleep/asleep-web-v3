import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Rnd(props) {
  const { t } = useTranslation();
  const johnName = t('people:john_name');
  const johnBody = t('people:john_body');
  const julieName = t('people:julie_name');
  const julieBody = t('people:julie_body');
  const brianName = t('people:brian_name');
  const brianBody = t('people:brian_body');
  const joeyName = t('people:joey_name');
  const joeyBody = t('people:joey_body');

  const RND = [
    {
      name: johnName,
      href: '',
      body: johnBody,
      src: [
        '/images/people/detail/2_John_s_2x.jpg',
        '/images/people/detail/2_John_m_2x.jpg',
        '/images/people/detail/2_John_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_John_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_John_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_John_thumb-L_2x.jpg'
      ]
    },
    {
      name: julieName,
      href: '',
      body: julieBody,
      src: [
        '/images/people/detail/2_Julie_s_2x.jpg',
        '/images/people/detail/2_Julie_m_2x.jpg',
        '/images/people/detail/2_Julie_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Julie_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Julie_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Julie_thumb-L_2x.jpg'
      ]
    },
    {
      name: brianName,
      href: '',
      body: brianBody,
      src: [
        '/images/people/detail/2_Brian_s_2x.jpg',
        '/images/people/detail/2_Brian_m_2x.jpg',
        '/images/people/detail/2_Brian_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Brian_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Brian_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Brian_thumb-L_2x.jpg'
      ]
    },
    {
      name: joeyName,
      href: '',
      body: joeyBody,
      src: [
        '/images/people/detail/2_Joey_s_2x.jpg',
        '/images/people/detail/2_Joey_m_2x.jpg',
        '/images/people/detail/2_Joey_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Joey_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Joey_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Joey_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={RND} />;
}

export default Rnd;
