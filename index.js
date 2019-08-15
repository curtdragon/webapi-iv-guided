require("dotenv").config();
const server = require('./api/server.js');
const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


//When running locally the IP is taken care of by the localhost
//and we can hardcode any old port overr 3000

// when deploying

//Heroku will assign an IP address
//We can't hardcode in the port
//Hero needs to tell us which port because it might be taken