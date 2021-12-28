import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Appwebservice(props) {
  const { t } = useTranslation();
  const nick = t('people:nick_name');
  const nickBody = t('people:nick_body');
  const jun = t('people:jun_name');
  const junBody = t('people:jun_body');

  const REASEARCH = [
    {
      name: nick,
      href: '',
      body: nickBody,
      src: [
        '/images/people/detail/2_Nick_s_2x.jpg',
        '/images/people/detail/2_Nick_m_2x.jpg',
        '/images/people/detail/2_Nick_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Nick_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Nick_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Nick_thumb-L_2x.jpg'
      ]
    },
    {
      name: jun,
      href: 'https://medium.com/asleepblog/people-in-asleep-에이슬립-개발자-준-그를-알아보자-d418a44c2922',
      body: junBody,
      src: [
        '/images/people/detail/2_Jun_s_2x.jpg',
        '/images/people/detail/2_Jun_m_2x.jpg',
        '/images/people/detail/2_Jun_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Jun_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Jun_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Jun_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={REASEARCH} />;
}

export default Appwebservice;
