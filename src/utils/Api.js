class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _check(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(this._check);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._check);
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._check);
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers }).then(this._check);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._check);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._check);
  }

  changeLikeCardStatus(cardId, like) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._check);
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "b3a2877b-0f1d-4ff6-bf47-ad47eb626b3c",
    "Content-Type": "application/json",
  },
});

export default api;
