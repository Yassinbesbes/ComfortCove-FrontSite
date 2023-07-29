function showPhoto(color) {
  var photo = document.getElementById('photo');
  // Set the source of the photo based on the selected color
  switch (color) {
    case 'black':
      photo.src = 'images/black-photo.jpg';
      break;
    case 'pink':
      photo.src = 'pink-photo.jpg';
      break;
    case 'yellow':
      photo.src = 'yellow-photo.jpg';
      break;
    case 'green':
      photo.src = 'green-photo.jpg';
      break;
    default:
      photo.src = '';
  }
}

var photoContainer = document.querySelector('.photo-container');
        var myButton = document.querySelector('.my-button');
        
        // Show the button when hovering over the photo
        photoContainer.addEventListener('mouseover', function() {
            myButton.style.opacity = '1';
        });
        
        // Hide the button when the cursor moves out of the photo
        photoContainer.addEventListener('mouseout', function() {
            myButton.style.opacity = '0';
        });
        /*
        function changePhoto() {
            var images = ["images/a.png", "images/aa.png",]; // Replace with your image file paths or URLs
            var currentIndex = 0;
    
            var image = document.getElementById("myImage");
            currentIndex = (currentIndex + 1) % images.length;
            image.src = images[currentIndex];
            image.alt = "Photo " + (currentIndex + 1);
            
            // Reset button position after changing the photo
            myButton.style.top = '50%';
        }*/

function addHeartAnimationToImage(imageElement) {
  let clickCount = 0;
  const maxClicks = 2;
  imageElement.addEventListener('dblclick', function() {
    clickCount++;
    if (clickCount === maxClicks) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '<i class="fa fa-heart"></i>';
      const rect = imageElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      document.body.appendChild(heart);

        setTimeout(function() {
          heart.remove();
        }, 2000);
            clickCount = 0;
    }
  });
}
    
const image = document.getElementById('myImage');
addHeartAnimationToImage(image);

