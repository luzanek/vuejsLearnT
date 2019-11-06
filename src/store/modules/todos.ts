import axios from 'axios';
import { Store } from 'vuex';

const state = {
    todos: [
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
    ]
}

const getters = {
    allTodos: (state: any) => state.todos,
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}