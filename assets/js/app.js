var test = window.location.href;
console.log(test);

var app = new Vue({
    el: '#app',
    data: {
        info:'',
        character1:'',
        character2:'',
        character3:'',
        randomNB:'',
        
    },
    methods: {
      random () {
        return parseInt(Math.random() * 825)
      }
    },
    mounted () {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => (this.info = response['data']['results'], this.character1 = this.info[parseInt(random())]));
             
      },


  })

const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  
  
  
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      
      
      
      
      
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
