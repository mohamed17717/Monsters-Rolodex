import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster, index) => (
      <Card monster={monster} key={index} />
    ))}
  </div>
);
