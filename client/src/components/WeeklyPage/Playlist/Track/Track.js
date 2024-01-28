import "./Track.css";
import CoverArt from "../../../../images/spotifytest.jpg";
export default function Track(props) {
    return(
        <div className="track">
            <div className="track-info">
                <img src={CoverArt} alt="Cover Art" />
                <div className="track-info-text">
                    <h3>Track Name</h3>
                    <h4>Artist Name</h4>
                </div>
            </div>
        </div>
    )
}