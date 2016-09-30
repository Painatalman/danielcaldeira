import { observable } from 'mobx';

export default class LanguageManager {
  @observable currentLanguage='PT'

  setLanguage(lang) {
    this.currentLanguage = lang;
  }
}
