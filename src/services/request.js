export const requestJSON = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;
      return json;
    });
};

export const requestStream = (path, method, addHeaders, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'audio/mp3',
      'Transfer-Encoding': 'chunked',
      ...addHeaders
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  });
};
