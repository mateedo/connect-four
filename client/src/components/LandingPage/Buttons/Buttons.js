import React from "react";
import "./Buttons.css";
import logo from "../../../images/spotify-logo.png";
import {useEffect, useState} from 'react'
const client_id = '1909cb02e93d4ef3bb9c89518f864cca'; // Your client id
const redirect_uri = "http://localhost:3000";
const space_delim = "%20";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];
const scope = scopes.join(space_delim);

const url = "https://accounts.spotify.com/authorize";

const getReturnParams = (hash) => {
  const stringsAfterHash = hash.substring(1);
  const urlParams = stringsAfterHash.split("&");
  const paramSplit = urlParams.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramSplit;
};


export default function Buttons() {

  React.useEffect(() => {
    if(window.location.hash){
      const {
        access_token,
        expires_in,
        token_type
      } = getReturnParams(window.location.hash);

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);
      localStorage.setItem("tokenType", token_type);
    }
  })

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/members").then(
        res => res.json()
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])


  const handleLogin = () => {
    //console.log(`${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token&show_dialog=true`)
    window.location = `${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=token&show_dialog=true`;
  }
  //localStorage.getItem("accessToken")
  return (
    <div className="buttons">
      <button className="spotify" onClick={handleLogin}>
        <p>Log in to Spotify</p>
        <img src={logo} alt=""></img></button>
    </div>
  );
}