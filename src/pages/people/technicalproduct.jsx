import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import PeopleDetailPage from '../../components/organisms/People/detail/PeopleDetailPage';

function Technicalproduct(props) {
  const { t } = useTranslation();
  const aaron = t('people:aaron_name');
  const aaronBody = t('people:aaron_body');
  const lea = t('people:lea_name');
  const leaBody = t('people:lea_body');
  const blaze = t('people:blaze_name');
  const blazeBody = t('people:blaze_body');

  const REASEARCH = [
    {
      name: aaron,
      href: '',
      body: aaronBody,
      src: [
        '/images/people/detail/2_Aaron_s_2x.jpg',
        '/images/people/detail/2_Aaron_m_2x.jpg',
        '/images/people/detail/2_Aaron_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Aaron_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Aaron_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Aaron_thumb-L_2x.jpg'
      ]
    },
    {
      name: lea,
      href: '',
      body: leaBody,
      src: [
        '/images/people/detail/2_Lea_s_2x.jpg',
        '/images/people/detail/2_Lea_m_2x.jpg',
        '/images/people/detail/2_Lea_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Lea_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Lea_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Lea_thumb-L_2x.jpg'
      ]
    },
    {
      name: blaze,
      href: '',
      body: blazeBody,
      src: [
        '/images/people/detail/2_Blaze_s_2x.jpg',
        '/images/people/detail/2_Blaze_m_2x.jpg',
        '/images/people/detail/2_Blaze_l_2x.jpg'
      ],
      thumbnail: [
        '/images/people/thumbnail/2_Blaze_thumb-S_2x.jpg',
        '/images/people/thumbnail/2_Blaze_thumb-M_2x.jpg',
        '/images/people/thumbnail/2_Blaze_thumb-L_2x.jpg'
      ]
    }
  ];

  return <PeopleDetailPage data={REASEARCH} />;
}

export default Technicalproduct;
