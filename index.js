import app from "./app";
import './assets/veadmin.css'
import veadminIcon from './components/veadminIcon'

export default {
    version: '0.0.1',
    install(Vue){
        Vue.component('veadmin', app)
        Vue.component('fib-icon',veadminIcon)
    }
}