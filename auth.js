// /js/auth.js

const API = "https://long-hall-0aaa.pedro-fillype.workers.dev";

function getToken() {
  return localStorage.getItem("token");
}

function setSession(data) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}

function isLogged() {
  return !!getToken();
}

function logout() {
  localStorage.clear();
  window.location.href = "/login/";
}

function authFetch(url, options = {}) {
  const token = getToken();

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`
    }
  });
}
