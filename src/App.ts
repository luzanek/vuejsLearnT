import { Component, Vue } from "vue-property-decorator";
import Todos from "./components/Todos/Todos.vue";

@Component({
    components: {
        Todos
    },

})

export default class App extends Vue {

}