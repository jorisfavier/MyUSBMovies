
# MyUSBMovies
A friend lends you his external hard drive, but what a mess, there is no organization in his files, and so, no way to find which movies you had already watched or not. And sometimes it could also be difficult to identify a movie based on its file's name.

That's why I created **MyUSBMovies**, it allows you to scan a chosen directory and display all the movie found (amongst your video files) in a clean minimalistic way. 

![MyUSBMovies Screenshot](/assets/img/screenshot-01.png?raw=true)

## How It works
**MyUSBMovies** is a new way to display your video files. Indeed you just choose a directory and the application will scan all the files and subdirectories in order to find the video files. Then the application will clean the name of them and will try to find information about the relevant movies on the internet trought the IMDB API. If the application found information on a video file it will display a cover of the movie. The different buttons on the cover will allow you to consult the detailed information on the movie or to do some action on the video file.

This application is a stand-alone so no need to install it.

![MyUSBMovies Screenshot 2](http://i.imgur.com/1KSIbtF.gif)


## Download
You can download stable builds:

| *BUILD* | MAC / OSX | WINDOWS x32 | WINDOWS x64 |
|:-------:|:---------:|:-----------:|:-----------:|
|**STABLE** | [**1.0.0**](http://www.mediafire.com/download/rn4x0ozkk7s06bw/MyUSBMovies.zip) | [**1.0.0**](http://www.mediafire.com/download/2647wisli08u2ml/MyUSBMovies.exe) | [**1.0.0**](http://www.mediafire.com/download/bp6xask3kbzlwv3/MyUSBMovies-x64.exe) |

## Dependencies & libraries

Required dependencies:

* [NW.js](http://nwjs.io/)
* [Node Movie 2.0.0](https://github.com/mertkahyaoglu/node-movie)
* [Movie Title](https://github.com/danielhusar/movie-title)

Libraries used:

* [Angular](https://angular.io/)
* [Angular Material](https://material.angularjs.org)
* [ngMorph](https://github.com/jimobrien/ngMorph)
* [Angular svg progress bar](https://github.com/crisbeto/angular-svg-round-progressbar)

## Support

* [Bug / Issue Tracker](https://github.com/jorisfavier/MyUSBMovies/issues)

## Licence
MIT © Joris Favier