import http from 'axios'

const apiClient = http.create({
  baseURL: 'http://chat/api'
})

const sendMessage = async (message) => {
  let result = null

  const formData = new FormData()
  formData.set('q', message)

  await apiClient.post('/get-answer', formData, {
    crossDomain: true,
    headers: {
      'Access-Control-Request-Method': '*',
      'Access-Control-Request-Headers': 'X-Custom-Header',
      'Acces-Control-Allow-Origin': '*'
    }
  }).then(({ data }) => {
    if (data && data.ok) {
      result = data.a
    }
  }).catch(error => {
    throw new Error(error)
  })
  return result
}

export default {
  sendMessage
}
