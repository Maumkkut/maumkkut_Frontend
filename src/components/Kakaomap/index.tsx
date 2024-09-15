import useKakaoLoader from '@/hooks/kakaomap/useKakaoLoader';
import {
  Map,
  MapMarker,
  Polyline,
  useMap,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';
import pin from '@assets/images/GroupTrip/Marker.svg';
import { useMemo, useState } from 'react';

interface trip {
  title: string;
  addr1: string;
  mapx: number;
  mapy: number;
}

const Kakaomap = ({ data }: { data: Array<trip> }) => {
  useKakaoLoader();

  const [points] = useState<
    {
      lat: number;
      lng: number;
    }[]
  >(
    data.map((location) => ({
      lat: location.mapy,
      lng: location.mapx,
    })),
  );

  return (
    <Map
      id="map"
      className="h-[400px] w-full"
      center={{
        lat: data[0].mapy,
        lng: data[0].mapx,
      }}
      level={5}
    >
      <Polyline
        path={[
          data.map((location) => ({
            lat: location.mapy,
            lng: location.mapx,
          })),
        ]}
        strokeWeight={5}
        strokeColor={'#CA0238'}
        strokeOpacity={1}
        strokeStyle={'solid'}
      />
      {data.map((location, index) => (
        <CustomMarker
          key={location.addr1}
          index={index}
          data={location}
        />
      ))}
      <ReSetttingMapBounds points={points} />
    </Map>
  );
};

const CustomMarker = ({ data, index }: { data: trip; index: number }) => {
  CustomOverlayMap;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MapMarker
        key={data.addr1}
        onClick={() => setIsOpen(true)}
        image={{
          src: pin,
          size: {
            width: 40,
            height: 40,
          },
        }}
        position={{
          lat: data.mapy,
          lng: data.mapx,
        }}
      />
      {isOpen && (
        <CustomOverlayMap
          position={{
            lat: data.mapy,
            lng: data.mapx,
          }}
        >
          <CustomeInfo
            handler={setIsOpen}
            index={index}
            title={data.title}
          />
        </CustomOverlayMap>
      )}
    </>
  );
};

const CustomeInfo = ({
  handler,
  index,
  title,
}: {
  handler: (arg: boolean) => void;
  index: number;
  title: string;
}) => {
  return (
    <div className="absolute -top-20 left-4 flex min-h-[50px] w-[250px] rounded-md bg-white text-sm">
      <div className="flex items-center justify-center bg-mk-logo1 px-2">
        <p>{index + 1}</p>
      </div>
      <div className="flex grow items-center justify-center text-wrap px-4">
        <p>{title}</p>
      </div>
      <button
        className="flex items-center justify-center px-2"
        onClick={() => handler(false)}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

const ReSetttingMapBounds = ({
  points,
}: {
  points: { lat: number; lng: number }[];
}) => {
  const map = useMap();
  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();

    points.forEach((point) => {
      bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
    });
    return bounds;
  }, [points]);

  return (
    <p>
      <button
        className="mt-4 w-full rounded-lg bg-mk-logo3 py-5 text-white"
        onClick={() => map.setBounds(bounds)}
      >
        지도 한 눈에 보기
      </button>
    </p>
  );
};

export default Kakaomap;
