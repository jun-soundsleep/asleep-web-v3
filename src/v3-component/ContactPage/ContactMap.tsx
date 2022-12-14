import React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

const Maps = ({ google }) => {
  return (
    <div className={`relative w-full h-[500px] mt-[160px]`}>
      <Map google={google}></Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP
})(Maps);
