export default class CatPictures {  
  static getPicture() {
    return fetch("https://thatcopy.pw/catapi/rest/")
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
      })
      .catch(function(error) {
        return error;
    })
  }
}