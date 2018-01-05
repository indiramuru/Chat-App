import * as API from '../utils/api';
export const SAVE_USERNAME = "SAVE_USERNAME";
export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_SPECIFIC_ROOM = "RECEIVE_SPECIFIC_ROOM";
export const RECEIVE_ROOM_MESSAGES = "RECEIVE_ROOM_MESSAGES";
export const RECEIVE_NEW_MESSAGES = "RECEIVE_NEW_MESSAGES";

/**
* @description Sends data to update the state
* @return {object} Type to identify the switch case and the state gets updated with the data.
*/
export const saveUserName = username => ({
  type: SAVE_USERNAME,
  username
});

/**
* @description Sends data to update the state
* @return {object} Type to identify the switch case and the state gets updated with the data.
*/
export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

/**
* @description Makes set of API calls to get chat rooms' details
* @return {object} Dispatches actions to get details
*/
export const fetchRooms = () => dispatch => {
  return (
    API
      .fetchRooms()
      .then(rooms => {
        dispatch(receiveRooms(rooms))
        dispatch(fetchSpecificRoom(rooms[0].id))
      })
  )
};

/**
* @description Sends data to update the state
* @return {object} Type to identify the switch case and the state gets updated with the data.
*/
export const receiveSpecificRoom = room => ({
  type: RECEIVE_SPECIFIC_ROOM,
  room
});

/**
* @description Makes set of API calls to get chat rooms' details
* @return {object} Dispatches actions to get details
*/
export const fetchSpecificRoom = (roomId) => dispatch => {
  return (
    API
      .fetchSpecificRoom(roomId)
      .then(room => {
        dispatch(receiveSpecificRoom(room))
        dispatch(fetchRoomMessages(room.id))
      })
  )
};

/**
* @description Sends data to update the state
* @return {object} Type to identify the switch case and the state gets updated with the data.
*/
export const receiveRoomMessages = (roomId, messages) => ({
  type: RECEIVE_ROOM_MESSAGES,
  roomId,
  messages
});

/**
* @description Makes an API call to get chat rooms' messages
* @return {object} Dispatches actions to update state
*/
export const fetchRoomMessages = (roomId) => dispatch => {
  return (
    API
      .fetchRoomMessages(roomId)
      .then(messages => {
        dispatch(receiveRoomMessages(roomId, messages))
      })
  )
};

/**
* @description Makes an API calls to get chat rooms' details
* @return {object} Dispatches actions to get room details
*/
export const sendMessages = (roomId, name, message) => dispatch => {
  return (
    API
      .sendMessage(roomId, name, message)
      .then(option => {
        try {
          if(option.message.indexOf('OK') > -1)
            dispatch(fetchSpecificRoom(roomId))
        } catch (e) {
          console.log(e);
        }
      })
  )
};