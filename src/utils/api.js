/**
* @description Get all the chat rooms
* @return {object} room object
*/
export function fetchRooms () {
  const url = 'http://localhost:8080/api/rooms';
  return fetch( url)
    .then((response) => {
      if (response.ok) {
        return response.json().then(json => {
            return json;
        });
      }
    })
}

/**
* @description Get specific room details
* @return {object} room object
*/
export function fetchSpecificRoom(id = '') {
  const url = `http://localhost:8080/api/rooms/${id}`;
  return fetch( url)
    .then((response) => {
      if (response.ok) {
        return response.json().then(json => {
            return json;
        });
      }
    })
}

/**
* @description Get specific room messsages
* @return {object} message object
*/
export function fetchRoomMessages(id = '') {
  const url = `http://localhost:8080/api/rooms/${id}/messages`;
  return fetch( url)
    .then((response) => {
      if (response.ok) {
        return response.json().then(json => {
            return json;
        });
      }
    })
}

/**
* @description Send message to the room
* @return {object} object confirming the post
*/
export function sendMessage (id = '', name, message) {
  const url = `http://localhost:8080/api/rooms/${id}/messages`;
  const init = {
      headers: {
        'content-type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({name: name, message: message})
  }
  return fetch( url, init )
      .then((res) => res.json())
}