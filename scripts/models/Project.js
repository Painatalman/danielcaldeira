export default class Project {
  constructor(item={title:'Title', subtitle:'Subtitle', category:null, imageUrl:'', featured:false}) {
    Object.assign(this, item);
  }
}
