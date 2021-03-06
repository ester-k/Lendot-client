// export const state = () => ({
//     state() {
//         return {
//             currentUser: {},
//             createAccountStep: 1,
//             userRequests: new Array(),
//         }
//     },

// })

export const state = () => ({
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    createAccountStep: 1,
    userRequests: new Array(),
    counter: 0

})
export const mutations = {
    setAccountStep(state, payload) {
        state[payload.state] = payload.value
    },
    setState(state, payload) {
        state[payload.state] = payload.value
    },

}
export const actions = {
    onAuthStateChangedAction(state, { authUser, claims }) {
        // debugger
        if (!authUser) {
            this.$router.push('/login')
        }
        // else {
        //     this.$router.push('/loanerPanel')
        //     console.log("conect");
        // }
    }
}