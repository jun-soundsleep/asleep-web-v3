import React from 'react';
import MainLayout from '../layout/MainLayout';
import ContactHead from './ContactHead';
import ContactInput from './ContactInput';
import ContactMap from './ContactMap';

const Index = () => {
  return (
    <MainLayout>
      <div className={`px-[16px] pt-[40px] medium:px-[32px] large:px-[317px]`}>
        <ContactHead />
        <ContactInput />
      </div>
      <ContactMap />
    </MainLayout>
  );
};

export default Index;
