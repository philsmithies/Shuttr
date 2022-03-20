import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room } from "@material-ui/icons";
import axios from "axios";
import { Image } from "cloudinary-react";
import "./index.css";

function Map() {
  const [allData, setAllData] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  useEffect(() => {
    axios("/photos/all")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 51.5073509,
    longitude: -0.1277583,
    zoom: 13,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ajmccor/ckq0xqybt3fsf18rltfgs0y5t"
      >
        <div>
          {allData.map((value) => {
            return (
              <div key={value.id}>
                <Marker
                  latitude={(value.coordinates || { lat: 0 }).lat}
                  longitude={(value.coordinates || { lng: 0 }).lng}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <Room
                    style={{ fontSize: viewport.zoom * 4, color: "#45A293" }}
                    onClick={() => handleMarkerClick(value._id)}
                  />
                </Marker>
                {value._id === currentPlaceId && (
                  <Popup
                    latitude={(value.coordinates || { lat: 0 }).lat}
                    longitude={(value.coordinates || { lng: 0 }).lng}
                    closeButton={true}
                    closeOnClick={false}
                    sortByDepth={true}
                    anchor="bottom"
                    onClose={() => setCurrentPlaceId(null)}
                  >
                    <div className="card">
                      <Image
                        className="map_photo"
                        cloudName="cyber_photos"
                        publicId={value.publicId}
                      />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`http://maps.google.com/maps?&z={10}&q=${
                          (value.coordinates || { lat: 0 }).lat
                        }+${(value.coordinates || { lng: 0 }).lng}`}
                      >
                        Link To Maps
                      </a>
                    </div>
                  </Popup>
                )}
              </div>
            );
          })}
        </div>
      </ReactMapGL>
    </div>
  );
}

export default Map;
