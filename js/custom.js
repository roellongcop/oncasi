document.getElementById('openDrawerBtn').addEventListener('click', function () {
  document.getElementById('sideDrawer').classList.add('open');
  // Prevent the event from bubbling up to the document
  event.stopPropagation();
});
document.getElementById('closeDrawerBtn').addEventListener('click', function () {
  document.getElementById('sideDrawer').classList.remove('open');
  // Prevent the event from bubbling up to the document
  event.stopPropagation();
});
// Close the drawer when clicking outside of it
document.addEventListener('click', function (event) {
  var sideDrawer = document.getElementById('sideDrawer');
  if (sideDrawer.classList.contains('open') && !sideDrawer.contains(event.target)) {
    sideDrawer.classList.remove('open');
  }
});
// Optional: Prevent clicks inside the drawer from closing it
document.getElementById('sideDrawer').addEventListener('click', function (event) {
  event.stopPropagation();
});

// Listen for all clicks on the document
document.addEventListener('click', function(event) {
  // Check if the clicked element is an <a> tag and if its href attribute includes '#'
  if (event.target.tagName === 'A' && event.target.getAttribute('href') === '#') {
    // Prevent the default action (which is navigating to the href attribute)
    event.preventDefault();
  }
});
