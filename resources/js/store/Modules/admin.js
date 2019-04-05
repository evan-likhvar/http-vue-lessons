import Vue from 'vue';
import router from '../../routes'


const admin = {
    namespaced: true,

    state: {
        responseError: null,
        user: null
    },
    getters: {
        isAuth(state) {
            return state.user
        }
    },
    mutations: {
        signedUser(state, user) {
            state.user = user;
            router.push('/dashboard')
        },
        responseError(state, message) {
            state.responseError = message
        },
        logoutUser(state) {
            state.user = null;
            router.push('/')
        }
    },
    actions: {
        signIn({commit}, payload) {
            console.log('goin axios request', payload);

            axios.post('/login', payload)
                .then(response => {
                    console.log(response.data, payload.email);
                    commit("signedUser", payload.email);
                    localStorage.setItem('user', payload.email)
                    sessionStorage.setItem('user', payload.email)
                })
                .catch(error => {
                    console.log(error.response.data.message);
                    commit("responseError", error.response.data.message);
                    setTimeout(() => {
                        commit("responseError", null);
                    }, 5000)
                });
        },
        logoutUser({commit}) {
            console.log('goin axios request to logout');

            axios.post('/logout')
                .then(response => {
                    //console.log('logout',response);

                    localStorage.removeItem('user');
                    sessionStorage.removeItem('user')
                    commit("logoutUser");
                })
                .catch(error => {
                    console.log('error',  error.response);
                    // localStorage.removeItem('user');
                    // sessionStorage.removeItem('user')
                    // commit("logoutUser");
                });
        }
    }
};

export default admin;