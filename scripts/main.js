import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./components/pages/home";

let mainData = {
  imageUrl: "/pictures/headlines/imagem_highlight_primary.jpg",
  type: "primary",
  alt: "highlight",
  title: "Principal",
  subtitle: "Subtítulo"
};

let dataItems = [
  {
    imageUrl: "/pictures/headlines/imagem_ideias_empalco.jpg",
    type: "secondary",
    alt: "highlight",
    title: "Ideias em Palco",
    subtitle: "Subtítulo",
    category: "Category"
  },
  {
    imageUrl: "http://placehold.it/540x300",
    type: "secondary",
    alt: "highlight",
    title: "Title",
    subtitle: "Subtítulo",
    category: "Category"
  },
  {
    imageUrl: "http://placehold.it/540x300",
    type: "secondary",
    alt: "highlight",
    title: "Title",
    subtitle: "Subtítulo",
    category: "Category"
  },
  {
    imageUrl: "http://placehold.it/540x300",
    type: "secondary",
    alt: "highlight",
    title: "Title",
    subtitle: "Subtítulo",
    category: "Category"
  },
];

ReactDOM.render(
  <HomePage mainData={mainData} dataItems={dataItems}></HomePage>  , document.getElementById('main-app'));
