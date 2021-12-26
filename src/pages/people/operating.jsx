import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Operating(props) {
  const { t } = useTranslation();
  const tyler2Name = t('people:tyler2_name');
  const tyler2Body = t('people:tyler2_body');
  const hannaName = t('people:hanna_name');
  const hannaBody = t('people:hanna_body');

  const RND = [
    {
      name: tyler2Name,
      href: '',
      body: tyler2Body,
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
      name: hannaName,
      href: '',
      body: hannaBody,
      src: [
        '/images/people/detail/2_Hanna_s_2x.jpg',
        '/images/people/detail/2_Hanna_m_2x.jpg',
        '/images/people/detail/2_Hanna_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Hanna_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Hanna_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Hanna_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={RND} />;
}

export default Operating;
