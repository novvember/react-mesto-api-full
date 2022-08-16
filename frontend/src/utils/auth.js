import { apiConfig } from './apiConfig';

class Auth {
  /**
   * Отвечает за осуществление и обработку сетевых запросов, связанных с аутентификацией
   * @param {string} Базовый URL для обращения
   */
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  /**
   * Получает из ответа сервера соощение об ошибке
   * @param {object} Ответ сервера на запрос
   * @returns {Error} Ошибка с текстом от сервера
   */
  _getErrorFromServer(res) {
    return res.json().then((res) => {
      throw new Error(res.message);
    });
  }

  /**
   * Регистрирует пользователя в сервисе
   * @param {object} Параметры пользователя {email, password}
   * @returns {Promise} Ответ сервера/ошибка
   *
   * Формат ответа сервера:
   * {
   *    "data": {
   *        "_id": "5f5204c577488bcaa8b7bdf2",,
   *       "email": "email@yandex.ru"
   *    }
   * }
   */
  register({email, password}) {
    const url = `${this._baseUrl}/signup`;
    return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
      .then(res => {
        if (res.ok) return res.json();
        return this._getErrorFromServer(res);
      });
  }

  /**
   * Авторизует пользователя в сервисе
   * @param {object} Параметры пользователя {email, password}
   * @returns {Promise} Ответ сервера/ошибка
   *
   * Формат ответа сервера:
   * {
   *    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUxNDhlNWJiODhmZGNhOTIxYjZhYzciLCJpYXQiOjE1OTkyMTExNzN9.Q3DVLh7t0f0BjyG9gh3UlUREYQxl2chdGTGy701lF6I"
   * }
   */
  authorize({email, password}) {
    const url = `${this._baseUrl}/signin`;
    return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
      .then(res => {
        if (res.ok) return res.json();
        return this._getErrorFromServer(res);
      });
  }

  /**
   * Провеляет валидность токена
   * @param {object} Параметры пользователя {email, password}
   * @returns {Promise} Ответ сервера/ошибка
   *
   * Формат ответа сервера:
   * {
   *    "_id":"1f525cf06e02630312f3fed7",
   *    "email":"email@email.ru"
   * }
   */
  checkToken(token) {
    const url = `${this._baseUrl}/users/me`;
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
    })
      .then(res => {
        if (res.ok) return res.json();
        return this._getErrorFromServer(res);
      });
  }
}

const auth = new Auth(apiConfig.baseUrl);

export default auth;
