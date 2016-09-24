import {observable} from 'mobx';

export default class Project {
  @observable title;

  constructor(item={title:'Title', subtitle:'Subtitle', category:null, imageUrl:'', featured:false}) {
    Object.assign(this, item);

    // in case imageUrl returns an array... like for RestDBIO
    if (this.imageUrl instanceof Array) {
      this.imageUrl = this.imageUrl[0];
    }
  }
}
