import axios from 'axios'

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const state = () => ({
  user: initialState
})

export const mutations = {
  login: (state, user) => {
    try {
      JSON.parse(JSON.stringify(user));
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
    }
  },
}

export const getters = {
  user: state => state
}

export const actions = {
  async login ({ commit }, { email, password }) {
    try {
      const { data } = await axios.post('https://sowerk-backend.herokuapp.com/api/auth/login', { email, password })
      console.log(data.user);
      commit('login', data.user)
      this.$router.push('/dashboard/buyer/home');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
