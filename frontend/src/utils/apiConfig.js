/**
 * Настройки для подключения к серверу
 */
const token = "b5024e97-68ca-4480-bf36-543078de24a2";
const cohortId = "cohort-41";

export const apiConfig = {
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
};
