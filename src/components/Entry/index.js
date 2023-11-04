import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

export default function Entry({ date, name, plot }) {
  console.log(date, name, plot);
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__name-container">
          <h2 className="entry__name">
            <q>{name}</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__plot">{plot}</p>
      </div>
    </article>
  );
}
