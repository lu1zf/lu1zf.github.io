

const projects = Array.from(document.getElementsByClassName('project-tile'));
const MIN_WIDTH_EFFECTS = 1200;


projects.forEach(project => {
  project.addEventListener("mouseenter", handleMouseEnter);
  project.addEventListener("mouseleave", handleMouseLeave);
});

function isMobile() {
  return window.innerWidth < MIN_WIDTH_EFFECTS ? true : false;
}

function handleMouseEnter(event) {
  if (isMobile()) return;

  projects.forEach(project => {
    if (event.target.id !== project.id) {
      setProjectTileBrightness(project, 50);
    }
  });

  setProjectImageGrayscale(event.target.id, 0);
}

function handleMouseLeave() {
  if (isMobile()) return;

  projects.forEach(project => {
    setProjectTileBrightness(project, 100);
    setProjectImageGrayscale(project.id, 1);
  });
}

function setProjectTileBrightness(project, value) {
  project.style.filter = `brightness(${value}%)`;
}

function setProjectImageGrayscale(projectId, value) {
  const img = document.getElementById(`image-${projectId}`);
  if (img) img.style.filter = `grayscale(${value})`;
}

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;