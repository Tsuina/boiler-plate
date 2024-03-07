import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete
} from '@geoapify/react-geocoder-autocomplete';
import { FC, useEffect, useState } from 'react';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

type TrainClockProps = {};

type Coordinate = {
  latitude: number;
  longitude: number;
};
type Position = {
  coords: Coordinate;
};

const TrainClock: FC<TrainClockProps> = () => {
  const [userPos, setUserPos] = useState<Position>();

  useEffect(() => console.log('checking the position', userPos), []);

  const success = (position: Position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setUserPos(position);
  };
  const error = () => {
    console.log('Unable to retrieve your location');
  };

  //   function onPlaceSelect(value) {
  //     console.log(value);
  //   }

  //   function onSuggectionChange(value) {
  //     console.log(value);
  //   }

  return (
    <GeoapifyContext apiKey="YOUR_API_KEY_HERE">
      yo
      {/* <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        type={type}
        lang={language}
        position={position}
        countryCodes={countryCodes}
        limit={limit}
       placeSelect={onPlaceSelect}
         value={displayValue}
        suggestionsChange={onSuggectionChange}
      /> */}
    </GeoapifyContext>
  );

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log('Geolocation not supported');
  }

  return <div>yo</div>;
};

export default TrainClock;
