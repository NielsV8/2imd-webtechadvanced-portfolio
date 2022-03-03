import './style.css'

import App from "./classes/app.js";
const app = new App();
import Todo from "./classes/todo.js";
const todo = new Todo();

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
