const fetchCalls = {

  callFitLitData(endPoint) {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err))
  },

  postNewData(endPoint, body) {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(confirmation => console.log("this is the new object that have been POSTED:", confirmation));
  }

};

export default fetchCalls;
