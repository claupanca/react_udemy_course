import { useState, useTransition } from "react";
import PropTypes from "prop-types";

import FullStar from "./FullStar";
import EmptyStar from "./EmptyStar";
import Star from "./Star";

UserRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

// we add a default value for the maxRating in case somebody does not pass the stars count
export default function UserRating({
  maxRating = 5,
  color = "gold",
  size = "2rem",
  defaultRating = 1,
  // we define a prop so that we can pass a function to access the rating from outside
  onSetRating,
}) {
  const [userRating, setUserRating] = useState(defaultRating);

  return (
    <div className="rating">
      <div className="stars">
        {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return userRating <= index ? (
            <EmptyStar key={index} index={index} handleMouse={setUserRating} />
          ) : (
            <FullStar
              key={index + 100}
              index={index}
              handleMouse={setUserRating}
            />
          );
        })} */}
        {Array.from({ length: maxRating }, (_, index) => {
          {
            {
              /* First I used 2 components for stars */
            }
            /* return userRating <= index ? (
            <EmptyStar key={index} index={index} onOver={setUserRating} />
          ) : (
            <FullStar key={index + 100} index={index} onOver={setUserRating} />
          ); */
          }
          // Then I changed to 1 reusable component

          return (
            <Star
              key={index}
              index={index}
              onOver={setUserRating}
              userRating={userRating}
              color={color}
              size={size}
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
