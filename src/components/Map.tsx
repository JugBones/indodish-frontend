// import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-defaulticon-compatibility';
// import { RootState } from '@/store/store';
// import { useDispatch, useSelector } from 'react-redux';

// function DraggableMarker() {
//   const [draggable, setDraggable] = useState(true);
//   const markerRef = useRef<any>(null);
//   const { isLoading, latitude, longitude, error } = useSelector(
//     (state: RootState) => state.createRestaurant
//   );
//   const dispatch = useDispatch();
//   const eventHandlers = useMemo(
//     () => ({
//       dragend() {
//         const marker = markerRef.current;
//         if (marker != null) {
//           dispatch(getCoordinate());
//         }
//         dispatch(
//           setCoordinate({
//             latitude: Object.values(marker.getLatLng())[0],
//             longitude: Object.values(marker.getLatLng())[1],
//           })
//         );
//       },
//     }),
//     []
//   );
//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d);
//   }, []);

//   return (
//     <Marker
//       draggable={draggable}
//       eventHandlers={eventHandlers}
//       position={{ lat: latitude, lng: longitude }}
//       ref={markerRef}
//     >
//       <Popup minWidth={90}>
//         <span onClick={toggleDraggable}>
//           {latitude}, {longitude}
//         </span>
//       </Popup>
//     </Marker>
//   );
// }

// export default function Map() {
//   const { isLoading, latitude, longitude, error } = useSelector(
//     (state: RootState) => state.createRestaurant
//   );

//   return (
//     <MapContainer
//       center={{ lat: latitude, lng: longitude }}
//       zoom={14}
//       scrollWheelZoom={true}
//       style={{ height: '100%', width: '100%' }}
//     >
//       <TileLayer
//         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <DraggableMarker />
//     </MapContainer>
//   );
// }
