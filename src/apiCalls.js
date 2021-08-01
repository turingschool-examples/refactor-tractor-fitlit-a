const fetchCalls = {

  callFitLitData(endPoint) {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err))
  
  }
};

export default fetchCalls;
