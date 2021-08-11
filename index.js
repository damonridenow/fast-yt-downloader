var bodyParser = require('body-parser')
let express = require('express')

let app = express()

app.use(bodyParser.json({ limit: '10000kb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10000kb', extended: true }))
app.use(express.static('public'));

app.post('/download', (req, res) => {
    const { exec } = require('child_process');

    const yt = exec('/Users/damon/.nvm/versions/node/v14.16.1/bin/ytdl ' + req.body.url + ' | ffmpeg -i pipe:0 -b:a 320K -vn "/Users/damon/Downloads/' + req.body.nomefile + '.mp3"', function (error, stdout, stderr) {
        if (error) {
          console.log(error.stack);
          console.log('Error code: '+error.code);
          console.log('Signal received: '+error.signal);
        }
        console.log('Child Process STDOUT: '+stdout);
        console.log('Child Process STDERR: '+stderr);
      });
    console.log(req.body)
    res.status(200).send('ok')
})

let port = 8081
app.listen(port);
console.log('Server listening on: ' + port);
