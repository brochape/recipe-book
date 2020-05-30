import React from 'react';
import "./header.scss"

const Header = () => {
  return (
    <ul className={"horizontal"}>
      <li>
        <a className={"headerTitle active"} href={"/"} >
          Recipes
        </a>
      </li>
      <li>
        <a className={"headerTitle"} href={"/videos"} >
          Videos
        </a>
      </li>
      <li>
        <a className={"headerTitle"} href={"/add-recipe"}>
          Add recipe
        </a>
      </li>
    </ul>
  );
};

export default Header;