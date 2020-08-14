import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },

  async login ({ commit }, { email, password }) {
    try {
      await this.$auth.loginWith('local', {
        data: { email, password }
      }).catch(e => {
        // this.$toast.error('Failed Logging In', {icon: "error_outline"});
      });
      if (this.$auth.loggedIn) {
        // this.$toast.success('Successfully Logged In', {icon: "done"});
      }
    } catch (e) {
      // this.$toast.error('Username or Password wrong', {icon: "error"});
    }
    // try {
    //   const { data } = await axios.post('auth/login', { email, password })
    //   localStorage.setItem('token', data.token)
    //   console.log(data, 'this is the data print from login store action');
    //   commit('SET_USER', data)
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     throw new Error('Bad credentials')
    //   }
    //   throw error
    // }
  },

  // login: async ({commit}, payload) => {
  //   let {data: {user, token, message, errors}, status} = await Api.post('/api/Myusers/login', payload).catch(e => e);
  //   if (status !== 200) {
  //     return {
  //       status: status,
  //       message: message,
  //       errors: errors
  //     }
  //   }
  //   commit('login', {token, user});
  //   Api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  //   return { status };
  // },
}
