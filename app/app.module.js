var app= angular.module('MyUSBMovieApp',
  [
    'ngMorph',
    'ngRoute',
    'akoenig.deckgrid',
    'ui.bootstrap',
    'ngMaterial'
  ]);


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
    "extensions" : ["mkv","avi","mp4","flv"]
});
