import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Location from "../../components/Location";

export default function Hashtag({ searchValue }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios(`https://shuttr-backend.herokuapp.com/api/photos/all`)
      .then((response) => {
        console.log(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  const pics = filteredData.filter(
    (picture) => picture.hashtag === searchValue
  );

  return (
    <div className="page">
      <div className="container">
        {pics?.map((value, index) => (
          <div className="card">
            <div className="face1">
              <div className="content" key={value.id}>
                <Image
                  className="cloud_photo"
                  cloudName="cyber_photos"
                  publicId={value.publicId}
                />
              </div>
            </div>
            <div className="face2">
              <div className="content">
                <p>{value.location}</p>
                <Popup
                  trigger={<button className="button">View More</button>}
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="modal-content">
                        {" "}
                        <Location
                          name={value.name}
                          hashtag={value.hashtag}
                          location={value.location}
                          coordinates={value.coordinates}
                          caption={value.caption}
                          description={value.description}
                          publicId={value.publicId}
                        />
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
