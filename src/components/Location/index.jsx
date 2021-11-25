import React from "react";
import "./index.css";
import { Image } from "cloudinary-react";
import MiniMap from "../MiniMap";
import { Link } from "react-router-dom";

export default function Location({
  name,
  hashtag,
  location,
  coordinates,
  lat,
  lng,
  caption,
  description,
  publicId,
}) {
  return (
    <div>
      <h1 class="location-newtext">{location}</h1>
      <div class="location_newwrapper">
        <div class="location_newphoto">
          <Image
            className="location-img"
            cloudName="cyber_photos"
            publicId={publicId}
          />
        </div>
        <div class="location_newmap">
          <MiniMap
            lat={coordinates.lat}
            lng={coordinates.lng}
            width="300px"
            height="300px"
            zoom={14}
            color="orangeRed"
          />
        </div>
        <div class="location_info">
          <p class="location_description">Description:</p>
          <p class="location_description-text">{description}</p>
          <p>
            Tags:{" "}
            <span class="tags">
              {" "}
              <Link to={`/${hashtag}`} className="index-button">
                #{hashtag}
              </Link>
            </span>
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://maps.google.com/maps?&z={10}&q=${coordinates.lat}+${coordinates.lng}`}
          >
            Link To Maps
          </a>
        </div>
      </div>
    </div>
  );
}
