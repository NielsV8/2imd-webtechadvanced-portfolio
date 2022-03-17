export default class Todo {
    constructor(title, done = false) {
      // HINT🤩
      // use a constructor to set basic property values
      this.title = title;
      this.done = done;
    }
  
    createElement() {
      let li = document.createElement("li");
      li.innerHTML = this.title;
      if(li.innerHTML.startsWith("High: ")){
        li.classList.add("prior-high");
        li.innerHTML = this.title.slice(5);
      }
      else if(li.innerHTML.includes("Medium: ")){
        li.classList.add("prior-medium");
        li.innerHTML = this.title.slice(7);
      }
      else if(li.innerHTML.includes("Low: ")){
        li.classList.add("prior-low");
        li.innerHTML = this.title.slice(4);
      }

      return li;
      // HINT🤩
      // this method will create the HTML structure with the correct classes, based on the todo priority
      // let newNote = document.createElement("li");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
      // return newNote;
    }
  
    markDone(e) {
      // HINT🤩
      const onClick = function() {
        console.log(this.id, this.innerHTML);
      }
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
      document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }
  