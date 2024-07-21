setTimeout(function () {
  var authenticatedText = document.getElementById("authenticated");
  authenticatedText.style.color = "green";
  authenticatedText.textContent = "Authenticated";
  authenticatedText.style.animation = "none";
  var mainBody = document.getElementById("main");
  mainBody.style.display = "block";

  var scanningPage = document.getElementById("scanning-page");
  scanningPage.style.display = "none";
}, 3000);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
    document.getElementById("navbar").style.background = "black";
  }
  if (currentScrollPos == 0) {
    document.getElementById("navbar").style.background = "none";
  }
  prevScrollpos = currentScrollPos;
};

var words = [
    "AWS CERTIFIED DEVELOPER ASSOCIATE|",
    "MASTER'S DEGREE IN COMPUTER SCIENCE|",
    "SEEKING FOR SOFTWARE ENGINEERING POSITION|",
    "FULL STACK DEVELOPER",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

function showMoreProjects() {
  var moreProjects = document.getElementById("cards");
  var moreProjectsButton = document.getElementById("more-projects-div");
  var lessProjectsButton = document.getElementById("less-projects-div");
  moreProjects.style.display = "grid";
  moreProjectsButton.style.display = "none";
  lessProjectsButton.style.display = "flex";
}

function showLessProjects() {
  var moreProjectsCard = document.getElementById("cards");
  var moreProjectsButton = document.getElementById("more-projects-div");
  var lessProjectsButton = document.getElementById("less-projects-div");
  moreProjectsButton.style.display = "flex";
  moreProjectsCard.style.display = "none";
  lessProjectsButton.style.display = "none";
}

function handleHamburgerClick() {
  var mobileMenus = document.getElementById("mobile-menus");
  if (mobileMenus.style.display === "none") {
    mobileMenus.style.display = "flex";
  } else {
    mobileMenus.style.display = "none";
  }
}
