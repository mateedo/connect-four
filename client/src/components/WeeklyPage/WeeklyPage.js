import {useState, useEffect} from "react";
import Stats from "./Stats/Stats"
import Playlist from "./Playlist/Playlist"
import PlaylistHeadings from "./PlaylistHeadings/PlaylistHeadings"
import axios from "axios";
import "./WeeklyPage.css";

export default function WeeklyPage() {
    const [songData, setSongData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/getSongRecommendations")
            .then(res => {
                // Log the raw response
                console.log("Raw response:", res);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                // Log the parsed JSON data
                console.log("Parsed JSON data:", data);
                setSongData(data);
            })
            .catch(err => {
                console.log("Error occurred:");
                console.log(err);
            });
    }, []);
    return (
        <div className="weekly-page">
            <h1>Weekly Page</h1>
            <h1>Playlist</h1>
            <PlaylistHeadings />
            <Playlist songData={songData}/>

        </div>
    );
}