import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./components/pages/home";

import ProjectStore from "./stores/projectStore";
import Project from "./models/Project";

let mainData = {
  imageUrl: "/pictures/headlines/imagem_highlight_primary.jpg",
  type: "primary",
  alt: "highlight",
  title: "Principal",
  subtitle: "Subtítulo"
};

window.Project = Project;
window.projectStore = new ProjectStore();

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

dataItems.forEach((item) => projectStore.addProject(item));

ReactDOM.render(
  <HomePage mainData={mainData} store={projectStore}></HomePage>  , document.getElementById('main-app'));
