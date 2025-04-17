import { createStore } from "vuex";

export default createStore({
    state: {
        loginUser: null,
    },
    getters: {},
    mutations: {
        login(state, user) {
            state.loginUser = user;
        },
        logout(state) {
            state.loginUser = null;
        },
    },
    actions: {},
    modules: {},
});
