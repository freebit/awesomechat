import http from 'axios'

const apiClient = http.create({
  baseURL: '/api'
})

const sendMessage = async (message) => {
  let result = {}
  await apiClient.post('/get-answer', { q: message }, {
    crossDomain: true,
    withCredentials: true,
    headers: {
      'Acces-Control-Allow-Origin': '*'
    }
  }).then(response => {
    if (response.ok) {
      result = response.a
    } else {

    }
  }).catch(error => {
    throw new Error(error)
  })
  return result
}

export default {
  sendMessage
}
