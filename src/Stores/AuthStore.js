const authStore = {
    token : window.localStorage.getItem('jwt'),
    
    get loggedIn() {
        return (this.token !== undefined && this.token !== null);
    },

    logIn(token) {
        this.token = token;
        window.localStorage.setItem('jwt', token);
    },
    logOut() {
        this.token = null;
        window.localStorage.removeItem('jwt');
    }
}

export default authStore;