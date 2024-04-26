import Track from "./Track/Track";
import "./Playlist.css";
import CoverArt from "../../../images/spotifytest.jpg";
export default function Playlist(props) {
    return(
        <div className="playlist">
      
            <Track 
                trackNum="1"
                artistName="Eminem"
                coverArt={CoverArt}
                trackName="Godzilla"
                albumName="Music To Be Murdered By"
                duration="3:31"
            />
            <Track
                trackNum="2"
                artistName="The Weeknd"
                coverArt={CoverArt}
                trackName="Blinding Lights"
                albumName="After Hours"
                duration="3:20"
            />
            <Track
                trackNum="3"
                artistName="Three Days Grace"
                coverArt={CoverArt}
                trackName="Never Too Late"
                albumName="One-X"
                duration="3:29"
            />
            <Track 
                trackNum="4"
                artistName="Eminem"
                coverArt={CoverArt}
                trackName="Godzilla"
                albumName="Music To Be Murdered By"
                duration="3:31"
            />
            <Track
                trackNum="5"
                artistName="The Weeknd"
                coverArt={CoverArt}
                trackName="Blinding Lights"
                albumName="After Hours"
                duration="3:20"
            />
            <Track
                trackNum="6"
                artistName="Three Days Grace"
                coverArt={CoverArt}
                trackName="Never Too Late"
                albumName="One-X"
                duration="3:29"
            />
        </div>
    )
}