import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Recipe from "../src/models/recipe";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("json save recipe",() =>{
  let recipe = {
    id : 0,
    name : "Chicken Broccoli",
    explanation : "This is a cool recipe",
    url : "http://google.com",
    image : "https://eatthegains.com/wp-content/uploads/2020/01/Chicken-and-Broccoli-Stir-Fry-5.jpg",
    ingredients : [
      {
        name : "Chicken Breasts",
        quantity : "2",
        unit : ""
      },
      {
        name : "Broccoli",
        quantity : "1",
        unit : ""
      }
    ]
  } as Recipe;


});