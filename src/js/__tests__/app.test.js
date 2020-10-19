import Settings from '../app';

test('class Settings instanceof', () => {
  expect(new Settings()).toBeInstanceOf(Settings);
});

describe('Settings methods', () => {
  const settings = new Settings();

  test('Settings set', () => {
    settings.set('status', true);
    expect(Array.from(settings.userSettings)).toEqual(expect.arrayContaining([
      ['status', true],
    ]));
    expect(settings.userSettings.has('status')).toEqual(true);
  });

  test('Settings set - throw (incorrect name)', () => {
    expect(() => {
      settings.set('', true);
    }).toThrowError(Error);
  });

  test('Settings set - throw (no name)', () => {
    expect(() => {
      settings.set();
    }).toThrowError(Error);
  });

  test('Settings set - throw (no value)', () => {
    expect(() => {
      settings.set('param');
    }).toThrowError(Error);
  });

  test('Settings theme', () => {
    settings.theme = 'light';
    expect(Array.from(settings.userSettings)).toEqual(expect.arrayContaining([
      ['theme', 'light'],
    ]));
  });

  test('Settings theme - throw (no value)', () => {
    expect(() => {
      settings.theme = '';
    }).toThrowError(Error);
  });

  test('Settings theme - throw (incorrect value type)', () => {
    expect(() => {
      settings.theme = true;
    }).toThrowError(Error);
  });

  test('Settings music', () => {
    settings.music = 'rock';
    expect(Array.from(settings.userSettings)).toEqual(expect.arrayContaining([
      ['music', 'rock'],
    ]));
  });

  test('Settings music - throw (no value)', () => {
    expect(() => {
      settings.music = '';
    }).toThrowError(Error);
  });

  test('Settings music - throw (incorrect value type)', () => {
    expect(() => {
      settings.music = {};
    }).toThrowError(Error);
  });

  test('Settings difficulty', () => {
    settings.difficulty = 'easy';
    expect(Array.from(settings.userSettings)).toEqual(expect.arrayContaining([
      ['difficulty', 'easy'],
    ]));
  });

  test('Settings difficulty - throw (no value)', () => {
    expect(() => {
      settings.difficulty = '';
    }).toThrowError(Error);
  });

  test('Settings difficulty - throw (incorrect value type)', () => {
    expect(() => {
      settings.difficulty = 0;
    }).toThrowError(Error);
  });

  test('Settings settings', () => {
    const data = settings.settings;
    expect(Array.from(data)).toEqual(expect.arrayContaining([
      ['status', true],
      ['theme', 'light'],
      ['music', 'rock'],
      ['difficulty', 'easy'],
    ]));
  });
});
