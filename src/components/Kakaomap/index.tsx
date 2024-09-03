import useKakaoLoader from '@/hooks/kakaomap/useKakaoLoader';
import {
  Map,
  MapMarker,
  Polyline,
  useMap,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';
import pin from '@assets/images/GroupTrip/pin.svg';
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
        lat: 37.7343114116,
        lng: 128.9904199396,
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
        strokeColor={'#038C8C'}
        strokeOpacity={1}
        strokeStyle={'solid'}
      />
      {data.map((location) => (
        <CustomMarker
          key={location.addr1}
          data={location}
        />
      ))}
      <ReSetttingMapBounds points={points} />
    </Map>
  );
};

const CustomMarker = ({ data }: { data: trip }) => {
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
          <div className="absolute -top-20 left-4 rounded-md bg-white p-3">
            <div className="flex gap-x-3">
              <span>test</span>
              <button onClick={() => setIsOpen(false)}>닫기</button>
            </div>
            <div className="flex flex-col">
              <span>장소 : {data.title}</span>
              <span>주소 : {data.addr1}</span>
            </div>
          </div>
        </CustomOverlayMap>
      )}
    </>
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
      <button onClick={() => map.setBounds(bounds)}>
        지도 범위 재설정 하기
      </button>
    </p>
  );
};

export default Kakaomap;
