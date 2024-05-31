import "./PlaylistHeadings.css";
export default function PlaylistHeadings() {
    return (
        <div className="playlist-headings">
            <h4 className="number">#</h4>
            <h4 className="song-title">Title</h4>
            <h4 className="album-title">Album</h4>
            <h4 className="duration">Duration</h4>
        </div>
    )
}