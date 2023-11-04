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
