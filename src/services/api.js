
const API_URL = process.env.REACT_APP_API_URL || "https://api.nrvcontainerday.io";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
};

export const authCheck = (userId, password) => {
  return fetch(`${API_URL}/login`, {
        headers : { Authorization: "Basic " + btoa(userId + ":" + password), },
      })
      .then(checkStatus)
      .then(() => true)
      .catch(() => false);
};

export const submitFeedback = (feedback, authToken) => {
  return fetch(`${API_URL}/feedback`, {
        method : "POST",
        headers : { Authorization: `Basic ${authToken}`, "Content-Type": "application/json", },
        body: JSON.stringify(feedback)
      })
      .then(checkStatus)
      .then((response) => response.json())
      .catch(() => false);
};
