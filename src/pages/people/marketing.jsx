import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Marketing(props) {
  const { t } = useTranslation();
  const kendrickName = t('people:kendrick_name');
  const kendrickBody = t('people:kendrick_body');
  const freddieName = t('people:freddie_name');
  const freddieBody = t('people:freddie_body');

  const MARKETING = [
    {
      name: kendrickName,
      href: '',
      body: kendrickBody,
      src: [
        '/images/people/detail/2_Kenrick_s_2x.jpg',
        '/images/people/detail/2_Kenrick_m_2x.jpg',
        '/images/people/detail/2_Kenrick_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Kenrick_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Kenrick_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Kenrick_thumb-L_2x.jpg'
      ]
    },
    {
      name: freddieName,
      href: '',
      body: freddieBody,
      src: [
        '/images/people/detail/2_Freddie_s_2x.jpg',
        '/images/people/detail/2_Freddie_m_2x.jpg',
        '/images/people/detail/2_Freddie_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Freddie_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Freddie_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Freddie_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={MARKETING} />;
}

export default Marketing;
