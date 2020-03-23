export default {
    state: {
        todos: [
            {
                id: 1,
                text: "html",
                t: false
            },
            {
                id: 2,
                text: "css",
                t: true
            },
            {
                id: 3,
                text: "js",
                t: false
            }
        ],
        index: 4,
        showType: "ALL"
    },
    mutations: {
        addTodo(state, text) {
            state.todos.push({
                id: state.index++,
                text,
                t: false
            });
        },
        alter(state, item) {
            item.t = !item.t;
        },
        alterType(state, showType) {
            state.showType = showType;
        }
    },
    getters: {
        filterArr(state) {
            switch (state.showType) {
                case "COMPLETE":
                    return state.todos.filter(item => item.t);
                case "NOCOMPLETE":
                    return state.todos.filter(item => !item.t);
                default:
                    return state.todos;
            }
        },
        todosAll(state) {
            return state.todos.length;
        },
        todon(state) {
            return state.todos.filter(item=>item.t).length;
        }
    }
}