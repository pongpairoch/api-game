
import express  from 'express'
import bodyParser  from "body-parser";
var app2 = express()
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({extended: true}))
var server = app2.listen(3001, console.log('server is running on port 3001'))


//get
app2.get('/api/get', (req, res) => {
   let token = req.query.token
   let signature = req.query.signature
   let agent = req.query.agent
   console.log(token);
   console.log(signature);
   console.log(agent);
    var options = {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': '',
          'x-dogzaa-signature': `${signature}`,
          'x-agent-id': `${agent}`
        },
        body: JSON.stringify({
          'token': `${token}`
        })
      }
fetch('https://webservice.dogzaa.io/v1/games/player', options)  
.then(function(r) {
  return r.json();
 })
.then(function(resJson) {
  return res.json(resJson);
 })

    
})
