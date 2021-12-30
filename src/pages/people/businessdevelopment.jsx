import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Businessdevelopment(props) {
  const { t } = useTranslation();
  const ryanName = t('people:ryan_name');
  const ryanBody = t('people:ryan_body');
  const willName = t('people:will_name');
  const willBody = t('people:will_body');

  const BD = [
    {
      name: ryanName,
      // href: 'https://medium.com/asleepblog/people-in-asleep-%EC%97%90%EC%9D%B4%EC%8A%AC%EB%A6%BD%EC%9D%98-%EC%A0%84%EB%9E%B5%EA%B0%80-cso-ryan-153174889f3a',
      body: ryanBody,
      src: [
        '/images/people/detail/2_Ryan_s_2x.jpg',
        '/images/people/detail/2_Ryan_m_2x.jpg',
        '/images/people/detail/2_Ryan_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Ryan_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Ryan_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Ryan_thumb-L_2x.jpg'
      ]
    },
    {
      name: willName,
      href: 'https://medium.com/asleepblog/people-in-asleep-%EC%B0%BD%EC%97%85%EC%9D%80-%EB%82%98%EC%A4%91%EC%97%90-%ED%95%98%EC%A3%A0-%EB%AD%90-97ab2a9d5a7c?p=97ab2a9d5a7c',
      body: willBody,
      src: [
        '/images/people/detail/2_Will_s_2x.jpg',
        '/images/people/detail/2_Will_m_2x.jpg',
        '/images/people/detail/2_Will_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Will_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Will_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Will_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={BD} href={'/people#business'} />;
}

export default Businessdevelopment;
