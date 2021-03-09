/* eslint-disable no-restricted-syntax */
export default class ErrorRepository {
  constructor() {
    this.errorCode = new Map([[1, 'первая ошибка'], [2, 'вторая ошибка'], [3, 'третья ошибка'], [4, 'четвертая ошибка'], [5, 'пятая ошибка']]);
  }

  // eslint-disable-next-line consistent-return
  translate(code) {
    for (const [key, value] of this.errorCode.entries()) {
      if (key === code) {
        return value;
      } if (!this.errorCode.has(code)) {
        return 'Unknown error';
      }
    }
  }
}
