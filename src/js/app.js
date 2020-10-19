/* eslint-disable no-console */

export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'], // possible values - 'light', 'gray'
      ['music', 'trance'], // possible values - 'pop', 'rock', 'chillout', 'off'
      ['difficulty', 'easy'], // possible values - 'normal', 'hard', 'nightmare'
    ]);
    this.userSettings = new Map();
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }

  set theme(value) {
    if (!(typeof value === 'string' || value instanceof String)) throw new Error('Неверный тип темы. Требуется строка');
    if (!value) throw new Error('Не указано значение темы');
    this.userSettings.set('theme', value);
  }

  set music(value) {
    if (!(typeof value === 'string' || value instanceof String)) throw new Error('Неверный тип звукового сопровождения. Требуется строка');
    if (!value) throw new Error('Не указано значение звукового сопровождения');
    this.userSettings.set('music', value);
  }

  set difficulty(value) {
    if (!(typeof value === 'string' || value instanceof String)) throw new Error('Неверный тип уровня сложности. Требуется строка');
    if (!value) throw new Error('Не указано значение уровня сложности');
    this.userSettings.set('difficulty', value);
  }

  set(name, value) {
    console.log(value);
    if (!name || value === undefined) throw new Error('Не указаны название и/или значение настройки');
    this.userSettings.set(name, value);
  }
}

try {
  const settings = new Settings();
  settings.theme = 'gray';
  settings.music = 'rock';
  settings.difficulty = 'nightmare';
  settings.set('status', true);
  console.log(settings.settings);
  settings.set('status');
} catch (error) {
  console.error(error.message);
}
