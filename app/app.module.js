var app= angular.module('MyUSBMovieApp',
  [
    'ngMorph',
    'ngMaterial',
    'ngRoute',
    'angular-svg-round-progress',
  ]);




var gui = require('nw.gui');
win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
try {
    nativeMenuBar.createMacBuiltin("MyUSBMovies");
    win.menu = nativeMenuBar;
} catch (ex) {
    console.log(ex.message);
}
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('blue');
});

app.constant("Parameters", {
    "separators": ["\\.","\\-","_",],
    "uselessWords": ["720p",
                    "1080p",
                    "dvdrip",
                    "yify",
                    "x264",
                    "HD",
                    "m720p",
                    "aac",
                    "ac3",
                    "dts",
                    "xvid",
                    "truefrench",
                    "vf",
                    "vo",
                    "vff",
                    "multi",
                    "vost",
                    "acc",
                    "5.1",
                    "web",
                    "dl",
                    "mkv",
                    "\\[",
                    "\\]",
                    "bluray",
                    "brrip",
                    "www\\..*\\.com",
                    "h264",
                    "mp4",
                    ],
    "extensions" : ["mkv","avi","mp4","flv"],
    "directory" : "/Users/joris/Downloads/Folx/movie/",
    "successRename" : "The file has been renamed with success !",
    "failRename" : "An error occured when renaming the file !",
    "successHideFile" : "The file has been hidden from the app with success !",
    "failHideFile" : "An error occured when hidding the file !",
    "errorNoVideo" : "No video files found",
    "errorReadDir" : "An error occured when reading directory",
    "failMoreInfo" : "We doesn't have more informations about this movie",
    "failPlayMovie" : "An error occured when reading video file",
    "failOpenMovie" : "An error occured when openning video file in the explorer",

});
