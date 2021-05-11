const myHeading = document.querySelector('h1');
myHeading.textContent = 'Queen City Football Club';

/* Adding an image that changes*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/club-crest-motto.jpeg') {
      myImage.setAttribute('src','images/club-crest.jpeg');
    } else {
      myImage.setAttribute('src','images/club-crest-motto.jpeg');
    }
}