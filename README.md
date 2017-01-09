For gulp build to download file you need to disable proxy for nw-build.  Do this by going into node_modules/nw-build and file downloader.  Find rqw.proxy = true and set to false.  You will have to do this again if you reinstall nw-builder

## Running project via nwjs ##
You need to replace the ffmpeg file located in your user home directory
For Windows %userprofile%\.nwjs\version#


## Building ##
You need to replace ffmpeg with the latest build or the one in this project.  For building put it in the cache/version/x86/64/ and replace ffmpeg

## Running via nw ##
Install version you are using

    npm install nw@0.20.0-beta2sdk