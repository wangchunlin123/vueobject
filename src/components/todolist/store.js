export default {
    namespaced: true,
    state: {
        todos: [
            {
                id: 1,
                text: "HTML",
                finally: false
            },
            {
                id: 2,
                text: "CSS",
                finally: true
            },
            {
                id: 3,
                text: "JS",
                finally: false
            }
        ],
        index: 4,
        showType: "all"
    },
    mutations: {
        todoclick(state, item) {
            item.finally = !item.finally;
        },
        addbtn(state, todopush) {
            console.log(state, todopush);
            state.todos.push({
                id: state.index++,
                text: todopush,
                finally: true
            });


        },
        footclick(state, showType) {
            state.showType = showType;
        },

    },
    getters: {
        filtertodos(state) {
            switch (state.showType) {
                case "all":
                    return state.todos;
                case "wancheng":
                    return state.todos.filter(item => item.finally);
                case "weiwancheng":
                    return state.todos.filter(item => item.finally == false);
            }
        }
    }
}