import "./Track.css";
import CoverArt from "../../../../images/spotifytest.jpg";
export default function Track(props) {
    return(
        <div className="track">
            <div className="track-info">
                <div className="track-num">
                    {props.trackNum}
                </div>
                <img src={CoverArt} alt="Cover Art" />
                <div className="track-title">
                    <h3>{props.trackName}</h3>
                    <div className="subtitle">{props.artistName}</div>
                </div>
                <div className="track-album">
                <div className="subtitle">{props.albumName}</div>
                </div>
                <div className="track-duration">
                <div className="subtitle">{props.duration}</div>
                </div>
            </div>
        </div>
    )
}