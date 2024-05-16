const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
}
  
handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img class="viewer-img" src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
  // Get the element that was clicked
  const clickedElement = event.target;

  // Get the src attribute from the clicked element
  const srcAttribute = clickedElement.getAttribute('src');

  // Split the src on the "-" character
  const srcParts = srcAttribute.split('-');

  // Construct the new image file name by adding "-full.jpeg" to the first part
  const newFileName = srcParts[0] + '-full.jpeg';

  // Create the viewer template using the new file name and alt text
  const viewerHtml = viewerTemplate(newFileName, 'full size image');

  // Insert the viewer template at the top of the body element
  document.body.insertAdjacentHTML('afterbegin', viewerHtml);

  // Add a listener to the close button (X)
  const closeButton = document.querySelector('.close-viewer');
  closeButton.addEventListener('click', closeViewer);
}

// Function to close the viewer
function closeViewer() {
  const viewer = document.querySelector('.viewer');
  viewer.remove();
}

const gallerySection = document.querySelector('.gallery');
gallerySection.addEventListener('click', viewHandler);
