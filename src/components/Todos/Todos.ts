import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from 'vuex'

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
    description: string;
}

@Component({
    computed: mapGetters(['allTodos'])

})
export default class TodosList extends Vue {

    public markComplete(todo: TodoItem) {
        todo.completed = !todo.completed
    };
    public deleteTodo(todo: TodoItem) {
        const itemToDelete = this.todoList.findIndex((item: TodoItem) => todo.id === item.id);
        if (itemToDelete !== -1) this.todoList.splice(itemToDelete, 1);
    };

    public addTodo(todo: TodoItem) {
        this.todoList.push(todo);

    };

    public todoList: TodoItem[] = [
        {
            id: 1,
            title: "Todo One",
            completed: false,
            description: "Clean the kitchen"
        },
        {
            id: 2,
            title: "Todo Two",
            completed: false,
            description: "Read about Vue.js"

        },
        {
            id: 3,
            title: "Todo Three",
            completed: false,
            description: "Paint the house"

        },
        {
            id: 4,
            title: "Todo Four",
            completed: false,
            description: "Testing task"

        }
    ];
}