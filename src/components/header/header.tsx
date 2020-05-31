import React from 'react';
import "./header.scss"
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  return (
    <ul className={"horizontal"}>
      <li>
        <span className={"headerTitle active"} onClick={() => history.push("/")}>
          Recipes
        </span>
      </li>
      <li>
        <span className={"headerTitle"}  onClick={() => history.push("/videos")}>
          Videos
        </span>
      </li>
      <li>
        <span className={"headerTitle"} onClick={() => history.push("/add-recipe")}>
          Add recipe
        </span>
      </li>
    </ul>
  );
};

export default Header;