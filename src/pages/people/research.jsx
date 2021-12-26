import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Research(props) {
  const { t } = useTranslation();
  const tyler = t('people:tyler_name');
  const tylerBody = t('people:tyler_body');
  const roben = t('people:roben_name');
  const robenBody = t('people:roben_body');

  const REASEARCH = [
    {
      name: tyler,
      href: '',
      body: tylerBody,
      src: [
        '/images/people/detail/2_Tyler_s_2x.jpg',
        '/images/people/detail/2_Tyler_m_2x.jpg',
        '/images/people/detail/2_Tyler_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Tyler_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Tyler_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Tyler_thumb-L_2x.jpg'
      ]
    },
    {
      name: roben,
      href: '',
      body: robenBody,
      src: [
        '/images/people/detail/2_Roben_s_2x.jpg',
        '/images/people/detail/2_Roben_m_2x.jpg',
        '/images/people/detail/2_Roben_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Roben_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Roben_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Roben_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={REASEARCH} />;
}

export default Research;
