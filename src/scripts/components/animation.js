function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  })
}

const options = {
  threshold: [0.1],
}

const observer = new IntersectionObserver(onEntry, options);

const elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm)
}