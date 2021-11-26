import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import MiniMap from "../../components/MiniMap";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

export default function ImageUpload() {
  const url = "https://api.cloudinary.com/v1_1/dryaxqxie/image/upload";
  const preset = "cyber_photos";
  const [image, setImage] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewSource, setPreviewSource] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 51.5073509,
    lng: -0.1277583,
  });

  const onChange = (e) => {
    setImage(e.target.files[0]);
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    // reads the file as url to create preview
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  function isLoading() {
    if (loading) {
      return (
        <div>
          <img
            class="loadinggif"
            src={process.env.PUBLIC_URL + "/images/loading.gif"}
            alt="loading animation"
          />
        </div>
      );
    }
  }

  function Minimap() {
    if (coordinates.lng !== "-0.1277583") {
      return (
        <MiniMap
          width="100%"
          height="400px"
          zoom={13}
          lat={coordinates.lat}
          lng={coordinates.lng}
          color="#45A293"
        />
      );
    }
  }

  const onSubmit = async () => {
    console.log(location);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);
    try {
      setLoading(true);
      isLoading(true);
      const config = { withCredentials: true };
      const res = await axios.post(url, formData);
      const imageUrl = res.data.secure_url;
      const image = await axios
        .post(
          "/photos/upload",
          {
            imageUrl,
            hashtag,
            caption,
            location,
            coordinates,
            description,
          },
          config
        )
        .then((window.location.href = "/discover"));
      console.log(image.data);
      setLoading(false);
      isLoading(false);
      setImage("");
      setCaption("");
      setHashtag("");
      setLocation("");
      setDescription("");
      setPreviewSource("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value);
    setCoordinates(latLng);
  };

  const searchOptions = {
    componentRestrictions: { country: ["gb"] },
  };

  const useStyles = makeStyles((theme) => ({
    typography: {
      fontFamily: ["Roboto"].join(","),
    },
    root: {
      height: "100vh",
    },
    image: {
      backgroundColor: "#2c3531",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    container: {
      marginRight: "300px",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "70%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  return (
    <div class="form_wrapper">
      <div class="preview">
        <div className="preview-text">
          <h2>Upload preview</h2>
        </div>
        {previewSource && (
          <img src={previewSource} alt="chosen" className="preview-image" />
        )}
      </div>
      <CssBaseline />
      <Grid className={classes.image} />

      <div id="signup-wrapper" className={classes.paper}>
        <Typography
          className="upload"
          component="h1"
          variant="h4"
          style={{ color: "#fff" }}
        >
          ADD IMAGE
        </Typography>
        <form className={classes.form} noValidate>
          <Button variant="contained" component="label">
            Upload
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={onChange}
            />
          </Button>
          {/*       
      <label htmlFor="contained-button-file">

      </label> */}
          <div class="places">
            <PlacesAutocomplete
              searchOptions={searchOptions}
              value={location}
              onChange={setLocation}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

                  <input {...getInputProps({ placeholder: "Type address" })} />

                  <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                        cursor: "pointer",
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>

          <TextField
            style={{ backgroundColor: "#fff", color: "#000000" }}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="#hashtag"
            label="#hashtag"
            name="#hashtag"
            autoComplete="#hashtag"
            value={hashtag}
            autoFocus
            // style={{backgroundColor: 'grey', border: 'white'}}
            onChange={(e) => setHashtag(e.target.value)}
          />

          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="caption"
            label="caption"
            name="caption"
            autoComplete="caption"
            value={caption}
            autoFocus
            style={{ backgroundColor: "#fff", color: "#000000" }}
            // style={{backgroundColor: 'grey', border: 'white'}}
            onChange={(e) => setCaption(e.target.value)}
          />

          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            style={{ backgroundColor: "#fff", color: "#000000" }}
            id="description"
            label="description"
            name="description"
            autoComplete="description"
            value={description}
            autoFocus
            // style={{backgroundColor: 'grey', border: 'white'}}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* <button onClick={onSubmit}>
          Upload
        </button> */}

          <Button
            type="button"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onSubmit}
            style={{ backgroundColor: "#51fbee", color: "#000000" }}
          >
            Upload
          </Button>
          {isLoading()}
        </form>
      </div>
      <div class="map_card">
        <div class="map_text">
          <h2>Preview</h2>
        </div>
        <div class="minimap_wrapper">{Minimap()}</div>
      </div>
    </div>
  );
}
