import "./LandingPage.css"
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";
import Footer from "./Footer/Footer";
export default function LandingPage() {
    return (
        <div className="landing-page">
            <Title />
            <Buttons />
            <Footer />
        </div>
    );
}