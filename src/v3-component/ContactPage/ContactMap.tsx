import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const Maps = ({ google }) => {
  const asleepPosition = {
    lat: 37.5051,
    lng: 127.0525
  };

  return (
    <div
      className={`relative w-full h-[500px] mt-[160px] medium:h-[780px] large:h-[600px]`}
    >
      {/*// @ts-ignore */}
      <Map
        initialCenter={asleepPosition}
        google={google}
      >
        <Marker
          // @ts-ignore
          position={asleepPosition}
        />
      </Map>
    </div>
  );
};

/*
 * reference
 * https://www.npmjs.com/package/google-maps-react
 * */
export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP
})(Maps);
