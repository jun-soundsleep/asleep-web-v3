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
      href: '',
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
      href: '',
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

  return <PeopleDetailPage data={BD} />;
}

export default Businessdevelopment;
