import { useState, useTransition } from "react";

import FullStar from "./FullStar";
import EmptyStar from "./EmptyStar";

export default function UserRating() {
  const [userRating, setUserRating] = useState(0);

  return (
    <div className="rating">
      <div className="stars">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return userRating <= index ? (
            <EmptyStar key={index} index={index} handleMouse={setUserRating} />
          ) : (
            <FullStar
              key={index + 100}
              index={index}
              handleMouse={setUserRating}
            />
          );
        })}
        <div className="star-count">
          <h2>{userRating}</h2>
        </div>
      </div>
      <button className="btn-add">+ Add to list</button>
    </div>
  );
}

/*
{
          index <= userRating ? (
            <FullStar
              key={index}
              index={index}
              handleMouseEnter={setUserRating}
            />
          ) : (
            <EmptyStar
              key={index}
              index={index}
              handleMouseEnter={setUserRating}
            />
          );
        }*/
