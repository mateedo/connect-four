import Stats from "./Stats/Stats"
import Playlist from "./Playlist/Playlist"
import "./WeeklyPage.css";

export default function WeeklyPage() {
    return (
        <div className="weekly-page">
            <h1>Weekly Page</h1>
            <h1>Playlist</h1>
            <Playlist />

        </div>
    );
}