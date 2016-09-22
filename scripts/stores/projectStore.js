import { observable } from 'mobx';

import Project from '../models/Project';

import axios from 'axios';

export default class ProjectStore {
  @observable projects = [];


  fetchProjects() {
      // just a fetch
      axios({
          method: 'get',
          url: 'https://desdevportfolio-d3f0.restdb.io/rest/portfolios',
          timeout: 10000,
          responseType: 'json',
          headers: {'x-apikey': '57e1b85f2afc881a06f26056'}
        })
        .then((response) => {
          response.data.forEach((newProjectData)=>this.projects.push(newProjectData));
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  addProject(projectData) {
    this.projects.push(new Project(projectData));
  }
}
