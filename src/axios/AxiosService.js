// eslint-disable-next-line import/no-extraneous-dependencies
import Axios from 'axios'

class AxiosService {
  api = Axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
  })

  async login(user) {
    return this.api.post('auth/login', user)
  }

  async register(username, email, password, firstName, lastName) {
    return this.api.post('/register',
      {
        username,
        email,
        password,
        firstName,
        lastName,
      })
  }

  async getAccountSettings() {
    const token = localStorage.getItem('token')

    return this.api.get(`/users/token/${localStorage.getItem('token')}`, { headers: { Authorization: `Bearer ${token}` } })
  }

  async editAccountDetails(username, fio, email, status) {
    return this.api.post('/account-settings', {
      username,
      fio,
      email,
      status,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  }

  async editPassword(password, rePassword) {
    return this.api.post('/account-settings/password', {
      password,
      rePassword,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  }
}

const axiosService = new AxiosService()
export default axiosService
