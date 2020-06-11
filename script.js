const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging')
}
function drag() {
  // console.log('Is dragging')
}
function dragend() {
  // console.log('Stop drag')
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  // console.log('Enter into dropzone')
}
function dragover() {
  // console.log(document.querySelector('is-dragging'))

  this.classList.add('ready-to-dropped')

  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeingDragged)
}
function dragleave() {
  // console.log('Leave area')

  this.classList.remove('ready-to-dropped')
}
function drop() {
  this.classList.remove('ready-to-dropped')
}