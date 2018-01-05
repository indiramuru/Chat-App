import {
  SAVE_USERNAME,
  RECEIVE_ROOMS,
  RECEIVE_SPECIFIC_ROOM,
  RECEIVE_ROOM_MESSAGES
} from '../actions/index';

/**
* @description updates state on dispatch actions
* @return {object} updates state object
*/
function chat(state = {}, action) {
    const { username, rooms, room, roomId, messages} = action;
    let map = null;

    if(rooms && rooms instanceof Array) {
        map = rooms.reduce((res, i) => {
            res[i.id] = i;
            return res;
        }, {});
    }
    switch(action.type) {
        case SAVE_USERNAME:
          return {
              ...state,
              username
          }
        case RECEIVE_ROOMS:
          return {
              ...state,
              loggedInTime: Date.now(),
              rooms: map
          }
        case RECEIVE_SPECIFIC_ROOM:
          return {
              ...state,
              selectedRoomId: room.id,
              rooms: {
                ...state.rooms,
                [room.id]: room
              }
          }
        case RECEIVE_ROOM_MESSAGES:
          return {
            ...state,
            rooms: {
              ...state.rooms,
              [roomId]: {
                ...state.rooms[roomId],
                messages
              }
            }
          }
        default:
          return state
    }

}

export default chat;