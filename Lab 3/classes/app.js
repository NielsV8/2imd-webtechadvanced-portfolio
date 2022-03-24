import Todo from "./todo.js";

export default class App {
    constructor() {
      console.log("🍕");
      this.setupEventListeners();
      this.loadFromStorage();
      // HINT🤩
      // set up the enter Key
      // this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      // this.loadFromStorage();
    }
  
    setupEventListeners() {
      console.log("👂🏽");
      // HINT🤩
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
      if(e.key === 'Enter' && document.querySelector("#add-item-text").value != ""){
        console.log("📕");
        let todo = new Todo(document.querySelector("#add-item-text").value);
        todo.add();
        this.reset(); 
        todo.saveToStorage();      
      }
    }
  
    loadFromStorage() {
      // HINT🤩
      let notes = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            notes.push( JSON.parse(localStorage.getItem(keys[i])));
        }
      for (let note of notes) {
        let todo = new Todo(note.title, note.done);
        todo.add();
      }
      // load all items from storage here and add them to the screen
      // use the Todo class to create the elements
      
    }
  
    reset() {
      document.getElementById("add-item-text").value = '';
    }
  }
  