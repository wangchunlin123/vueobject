export default {
    namespaced:true,
    state: {
        count: 10,
    },
    mutations: {
        add(state) {

            state.count++
        },
        sub(state) {

            state.count--
        }
    }
}