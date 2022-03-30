/* eslint-disable import/no-webpack-loader-syntax */
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { Room } from "@material-ui/icons";

mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function MiniMap({ lat, lng, width, height, zoom, color }) {
  const [viewport, setViewport] = useState({
    width: width,
    height: height,
    latitude: lat,
    longitude: lng,
    zoom: zoom,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ajmccor/ckq0xqybt3fsf18rltfgs0y5t"
      >
        <Marker latitude={lat} longitude={lng} offsetLeft={-20} offsetTop={-10}>
          <Room style={{ fontSize: viewport.zoom * 4, color: color }} />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default MiniMap;
