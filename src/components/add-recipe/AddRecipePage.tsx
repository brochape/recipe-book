import React, {useEffect, useState} from 'react';
import "./AddRecipePage.scss"
import headerHelper from "../header/headerHelper";

const AddRecipePage = () => {
    const [recipeName, setRecipeName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    function handleSubmit(evt: React.MouseEvent<HTMLInputElement, MouseEvent>) {
      evt.preventDefault();
    }

  useEffect(() => headerHelper.makeActive("Add recipe"));

    return (
      <div>
        <form className="form-style-7">
          <ul>
            <li>
              <label htmlFor="name">Recipe name</label>
              <input type="text"
                     id="name"
                     value={recipeName}
                     onChange={e => setRecipeName(e.target.value)}
                // placeholder={"For example: Chicken Brocoli"}
                     required/>
            </li>
            <li>
              <label htmlFor="desc">Description</label>
              <textarea id="desc"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                // placeholder={"Explanation"}
              />
            </li>
            <li>
              <label htmlFor="url">Image URL</label>
              <input type="url"
                     id={"url"}
                     value={url}
                     onChange={e => setUrl(e.target.value)}
                // placeholder={"Image URL"}
                     required/>
            </li>
            <li>
              <input type="submit"
                     onClick={evt => handleSubmit(evt)}
                     value={"Submit"}/>
            </li>
          </ul>
        </form>
      </div>
    );
  }
;

export default AddRecipePage;