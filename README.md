This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

###### Available Scripts ######

In the project directory, you can run:

### `npm install`

Run this to install dependencies listed in package.json

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run api-server`

To start the server. Start the server in separate terminal and start the application in another terminal.

###### Steps to run the project ######

* Clone the project from Github
* cd to the project folder
* Run `npm install`
* Run `npm run api-server`
* Open different terminal and run `npm start`
* Browser tab opens up pointing to `http://localhost:3000/`

##### Folder Structure #####

```
CHAT/
  README.md
  node_modules/
  package.json
  server.js
  public/
    index.html
    favicon.ico
  spec/
  src/
    actions/
      index.js
    components/
      App.js
      ChatMessage.js
      LogIn.js
      PostMessageForm.js
      Rooms.js
      RoomUserList.js
      Timer.js
    reducers/
      index.js
    styles/
    utils/
      api.js
    index.js
    index.css

```

##### Project Explanation #####

** Enter user name and upon clicking on the button or pressing enter, it takes us to a component with available rooms
** Rooms component displays the following:
  ** Left Panel - Fixed width
    * Username and time since user is online. Minutes updated every minute
    * List of available rooms. Page lands by hightlighting the first room and so displays respective messages to the right

  ** Right Panel - occupies rest of the width
    * Chat room has a header that displays room name and the users in that room
    * Chat room has a body that shows all the previous messages
    * Past messages from other users are displayed to the left of chat body with their name on top of it
    * Current users messages are displayed on the right side without their name on top of it
    * Chat room has a form at the end that lets the user post message (clicking on 'send' or enter works)
    * If scroll bar shows up on chat body, it always scrolls to the bottom to show lastest messages.

