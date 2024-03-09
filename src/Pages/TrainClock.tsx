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
  const [value, setValue] = useState('');
  const [userCity, sertUserCity] = useState('');
  const [userCounty, sertUserCounty] = useState('');
  const [userCountry, sertUserCountry] = useState('');

  // This is Gwenael Oppitz's personal API KEY on Geoapify
  const geoapifyApiKey = '82be8d4c612a491ea8119ca510bef22a';

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  }, []);

  useEffect(() => {
    if (userPos) {
      getPositionFromCoordinates();
    }
  }, [userPos]);

  const success = (position: Position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log('checking the position', position);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setUserPos(position);
  };
  const error = () => {
    console.log('Unable to retrieve your location');
  };

  const getPositionFromCoordinates = () => {
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${userPos?.coords.latitude}&lon=${userPos?.coords.longitude}&format=json&apiKey=${geoapifyApiKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        const { city, county, country } = json.results[0];
        sertUserCity(city);
        sertUserCounty(county);
        sertUserCountry(country);
        console.log('checking the result', city);
      })
      .catch((error) => console.log('error', error));
  };

  function onPlaceSelect(selection: string) {
    console.log(selection);
    setValue(selection);
  }

  function onSuggectionChange(value: string) {
    console.log(value);
  }

  return (
    <div>
      <div>
        you are in {userCountry}, {userCounty}, {userCity}
      </div>
      <GeoapifyContext apiKey={geoapifyApiKey}>
        <GeoapifyGeocoderAutocomplete
          placeholder="Enter your destination"
          limit={10}
          placeSelect={onPlaceSelect}
          //   value={value}
          onOpen={(e) => console.log('checking this crap', e)}
          suggestionsChange={onSuggectionChange}
          preprocessHook={(e) => {
            console.log('checking if i can get something1', e);
            return e;
          }}
          //   postprocessHook={(e) => {
          //     console.log('checking if i can get something2', e);
          //     return e.properties ;
          //   }}
          //   suggestionsFilter={(e) =>
          //     console.log('checking if i can get something3', e)
          //   }
          //   sendGeocoderRequestFunc={(e) =>
          //     {

          //         console.log('checking if i can get something4', e)
          //     }
          //   }
          //   sendPlaceDetailsRequestFunc={(e) =>
          //     console.log('checking if i can get something5', e)
          //   }
          //   onUserInput={(e) =>
          //     console.log('checking if i can get something6', e)
          //   }
          //   onOpen={(e) => console.log('checking if i can get something7', e)}
          onClose={(e) => console.log('checking if i can get something8', e)}
        />
      </GeoapifyContext>
    </div>
  );

  //   return <div>{userPos?.coords.latitude }</div>;
};

export default TrainClock;
