app.controller('HomeCtrl', ['$scope','$rootScope','Parameters', function ($scope,$rootScope,Parameters) {
	$rootScope.config = {
		closeEl: '.close',
		modal: {
	  		templateUrl: 'app/components/modal/info.html?t=000'
		}
	};
	$rootScope.configNoCover = {
		closeEl: '.close',
		modal: {
	  		templateUrl: 'app/components/modal/edit.html?t=000'
		}
	};

	$scope.movieList = $scope.movieList = [{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
}];
	$scope.movieNotFound = [{
 "title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":"17 Oct 2014",
 "Runtime":"134 min",
 "Genre":"Action, Drama, War",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"7.9",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
}];


	/*var fs = require('fs');
	var movie = require('node-movie');
	var movieTitle = require('movie-title');


	fs.readdir('/Users/joris/Downloads/Folx/movie/', function (err, files) { // '/' denotes the root folder
		if (err) throw err;
		files.forEach( function (file) {
			fs.lstat('/'+file, function(err, stats) {
				if (!err && stats.isDirectory()) { //conditing for identifying folders
					$('ul.list-dir').append('<li class="folder">'+file+'</li>');
				}
				else if(isMovieType(file)){
					//$scope.fileList.push(cleanTitle(file));
					infoMovie(cleanTitle(file));
				}
			});
		});

	});

	function infoMovie(title){

		movie(movieTitle(title), function (err, data) {
		    $scope.$apply(function () {
			    if(data.Error || data.Poster=="N/A"){
			    	console.log(title);
			    	$scope.movieNotFound.push({'title': title});
			    }
			    else{
			    	$scope.movieList.push(data);
			    }
	        });
		});
	}

	function cleanTitle(title){
		
		var regexp="\\."+Parameters.extensions.join("|\\.")
		var clean = title.replace(new RegExp(regexp, "gi"),'');
		regexp=Parameters.uselessWords.join("|");
		clean = clean.replace(new RegExp(regexp, "gi"),'');
		regexp=Parameters.separators.join("|");
		clean = clean.replace(new RegExp(regexp, "gi"),' ');
		return clean;
	}

	function isMovieType(file){
		var regexp = new RegExp("\\."+Parameters.extensions.join("|\\."),"gi");
		return regexp.test(file);
	}*/

}]);