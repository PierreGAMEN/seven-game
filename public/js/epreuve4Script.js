const digicode = document.querySelector('.image-digicode');
const trou = document.querySelector('.trou');
const container = document.querySelector('.containerEpreuve3')

digicode.addEventListener('mouseover', () => {
  const element1 = document.createElement('div');
  element1.className = 'hover-text';
  container.appendChild(element1)
  element1.innerText = 'Taper du code'

digicode.addEventListener('mouseout', () => {
  element1.remove();
 
});

});

trou.addEventListener('mouseover', () => {
  const element1 = document.createElement('div');
  element1.className = 'hover-text2';
  container.appendChild(element1)
  element1.innerText = 'Regarder dans le trou'


trou.addEventListener('mouseout', () => {
  element1.remove();
});

});

trou.addEventListener('click', () => {
  // Find the element with the class 'parallax'
  const bg = document.querySelector('.parallax');

  // Change the background image of the 'parallax' element
  bg.style.backgroundImage = "url('/pictures/interieurCabane.jpeg')";
  bg.style.zIndex = 3; // Set zIndex to bring the element to the front
  bg.style.transition = "2s ease"; // Apply a transition effect

  // After a delay of 2 seconds, execute the following code
  setTimeout(() => {
    // Create a button with the class 'buttonOut'
    const buttonOut = document.createElement('div');
    buttonOut.className = 'buttonOut';
    buttonOut.innerText = 'Revenir à la vue précédente';

    // Append the button to an element with the class 'container'
    container.appendChild(buttonOut);

    // Add a click event listener to the button
    buttonOut.addEventListener('click', () => {
      // Change the background image of the 'parallax' element back to the original
      bg.style.backgroundImage = "url('/pictures/cabane.jpeg')";
      bg.style.zIndex = -1; // Set zIndex to send the element to the back
      buttonOut.remove(); // Remove the button from the DOM
    });
  }, 2000); // 2 seconds delay
});

digicode.addEventListener('click', () => {
  window.location.href = '/digicode';
})