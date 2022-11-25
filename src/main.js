import { createApp } from 'vue'

//import App from './App.vue'
import App from './App'
import Fruit from './components/Fruit'
import TestComponent from './components/TestComponent'

createApp(App).mount('#app')
createApp(Fruit).mount('#Fruit')
createApp(TestComponent).mount('#TestComponent')

