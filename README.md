`$ npm install`

#### Update `.env.example` with the required values: ####
`HUE_BASEURI`: The IP address of your Hue Bridge

`LIGHTIDS`: Comma-separated integer values of the lights to include (run `npm get lights` to show all light ID's)

`SPEED`: How fast to change colors 

`$ mv .env.example .env`

`$ npm run rainbow`
