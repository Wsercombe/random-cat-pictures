import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CatPictures from './js/cat-pictures';



$(document).ready(function() {
  $('#get-cat').click(function() {
    event.preventDefault();
    console.log("test");
    CatPictures.getPicture()
    .then(function(response) {
      console.log(response.url);
      if (response.url) {
        $("#output-area").html(`<img src=${response.url} alt="Hopefully there is a picture of a cat" style=width:90%>`)
      } else {
        // response.url is empty
        $("#output-area").text(`There was an error: ${response.message}`)
      }
    })
  });
});
