# fast-yt-downloader
a simple youtube downloader using tampermonkey, node and ffmpeg

# installation
- download the current release of ffmpeg, and put it somewhere in your PATH
- install tampermonkey, create a new script, copy and paste the script in tampermonkey/script.js
- nvm use
- npm install
- node index.js

# on every youtube page
there will be a button in the upper left corner. When you are in a video page, you can press it, and a file will be downloaded in the download folder (index.js, line 13 : you need to modify the download path to match your folders)
