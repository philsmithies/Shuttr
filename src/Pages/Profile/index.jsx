import "./index.css";
import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import { useParams, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../Contexts/UserContext";

function Profile() {
  const [data, setData] = useState();
  const userData = useContext(UserContext);
  const [allPictures, setAllPictures] = useState([]);
  const [pics, setPics] = useState([]);
  let { userId } = useParams();

  const getProfileData = function (userId) {
    if (!userId) {
      setData(userData);
    } else {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "/api/user/" + userId,
      }).then((res) => {
        setData(res.data);
      });
    }
  };

  useEffect(() => {
    Axios("/api/photos/all").then((response) => {
      setAllPictures(response.data);
    });
    userId ? getProfileData(userId) : getProfileData();
    const filterPictures = function (pics) {
      const filteredPics = pics.filter(
        (picture) => data && picture.author === data.username
      );
      setPics(filteredPics);
    };
    filterPictures(allPictures);
  }, []); // eslint-disable-line

  return (
    <div>
      {data && (
        <div>
          <div className="profile_layout">
            <div className="userwrapper">
              <div className="profilephoto_wrapper">
                <Image
                  className="profile_photo"
                  cloudName="cyber_photos"
                  publicId={data.publicId && data.publicId}
                />
              </div>
              <div className="profile-bio">
                <h3 className="handle-title">@{data.username}</h3>
                <p className="profile-title">
                  Bio:
                  <br />
                  {data.job && data.job}
                </p>
                <p className="location-title">London, UK</p>
              </div>
            </div>
            <div className="userposts">
              <Typography
                className="your-posts-title"
                component="h1"
                variant="h4"
                style={{
                  fontWeight: "100",
                  color: "#fff",
                  marginBottom: "2rem",
                }}
              >
                {data.username}'s Posts
              </Typography>
              {pics.map((value, index) => (
                <div className="single-post" key={index}>
                  <Image
                    className="profile-feed"
                    cloudName="cyber_photos"
                    publicId={value.publicId}
                  />
                  {/* if=> value.author === data.username => diplay, else, dont */}
                  <p className="photo-title">Taken in: {value.location}</p>
                  <p className="location_description">Description:</p>
                  <p className="location_description-text">
                    {value.description}
                  </p>
                  <p>
                    Tags:{" "}
                    <span className="tagsprofile">
                      {" "}
                      <Link to={`/${value.hashtag}`} className="index-button">
                        #{value.hashtag}
                      </Link>
                    </span>
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`http://maps.google.com/maps?&z={10}&q=${value.coordinates.lat}+${value.coordinates.lng}`}
                  >
                    Link To Maps
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
