import React from "react";
import ReactDOM from "react-dom";
import Headline from "./components/headline.jsx";

let headlineColumns = document.getElementsByClassName("js-headline");
let dataItems = [
  {
    imageUrl: "/pictures/headlines/imagem_highlight_primary.jpg",
    type: "primary",
    alt: "highlight"
  },
  {
    imageUrl: "/pictures/headlines/imagem_ideias_empalco.jpg",
    type: "secondary",
    alt: "highlight"
  },
  {
    imageUrl: "http://lorempixel.com/540/300",
    type: "secondary",
    alt: "highlight"
  },
  {
    imageUrl: "http://lorempixel.com/540/300",
    type: "secondary",
    alt: "highlight"
  },
  {
    imageUrl: "http://lorempixel.com/540/300",
    type: "secondary",
    alt: "highlight"
  },
];
dataItems.forEach((item, i) => {
 ReactDOM.render(<Headline imageUrl={item.imageUrl} type={item.type} alt={item.alt} />, headlineColumns[i]);
})
