import "./card.css";
import photo from "../../photo.jpg";
export default function Card() {
  return (

    <div className="card">
      <div className="img-card">
        <img src={photo} alt="img" />
      </div>
      <div className="overlay-text">
        <h2>mohamedmamhoud</h2>
      </div>
    </div>

  );
}
