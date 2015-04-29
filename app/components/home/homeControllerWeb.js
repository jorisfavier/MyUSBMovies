app.controller('HomeCtrl', ['$scope','$rootScope','Parameters','$mdToast', function ($scope,$rootScope,Parameters,$mdToast) {
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

	$rootScope.toastDetail = {};

	$rootScope.closeToast = function() {
    	$mdToast.hide();
	};

	$rootScope.showToast = function(content,className) {
		$rootScope.toastDetail.content = content;	
		$rootScope.toastDetail.className = className;	
	    $mdToast.show({
	      templateUrl: 'app/components/toast/toastView.html?t=00',
	      hideDelay: 4000,
	      position: "top left"
	    });
	};

	$scope.configRoundRate = {
		uploadCurrent :  0,
		stroke :         7,
		radius :         28,
		isSemi :         false,
		rounded :        false,
		clockwise  :     true,
		bgColor :        '#fff',
		iterations :     50,
		currentAnimation : 'easeOutCubic',
	}

	$scope.ratedColor = function(rate){
		if(rate<=4){
			return '#f44336';
		}
		else if(rate<=6){
			return '#ff9800';
		}
		else if(rate<=8){
			return '#8bc34a';
		}
		else if(rate<=10){
			return "#4caf50";
		}
	}

	$rootScope.searchText = {};
	$rootScope.order = "-imdbRating";


	$scope.movieList = [{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":new Date("17 Oct 2014"),
 "Runtime":"134 min",
 "Genre":"Action, Drama",
 "Director":"David Ayer",
 "Writer":"David Ayer",
 "Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña",
 "Plot":"April, 1945. As the Allies make their final push in the European Theatre, a battle-hardened army sergeant named Wardaddy commands a Sherman tank and his five-man crew on a deadly mission behind enemy lines. Out-numbered, out-gunned, and with a rookie soldier thrust into their platoon, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
 "Language":"English, German",
 "Country":"UK, China, USA",
 "Awards":"4 wins & 9 nominations.",
 "Poster":"assets/img/fury.jpg",
 "Metascore":"64",
 "imdbRating":"8",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":new Date("18 Oct 2014"),
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
 "Released":new Date("19 Oct 2014"),
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
 "Released":new Date("17 Nov 2014"),
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
 "Year":"2015",
 "Rated":"R",
 "Released":new Date("17 Sept 2014"),
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
 "imdbRating":"6",
 "imdbVotes":"89,030",
 "imdbID":"tt2713180",
 "Type":"movie",
 "Response":"True"
},{
 "Title":"Fury",
 "Year":"2014",
 "Rated":"R",
 "Released":new Date("17 Oct 2014"),
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
 "Released":new Date("17 Oct 2014"),
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
 "title":"Ast.Le.Dom.Des.d.2014.FRENCH.720p.BluRay.x264-Goatlove -Zone-Telechargement.com",
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


	// var fs = require('fs');
	// var movie = require('node-movie');
	// var movieTitle = require('movie-title');
	// var gui = require("nw.gui");
	// $scope.movieNotFound = new Array();
	// $scope.movieList = new Array();

	// fs.readdir(Parameters.directory, function (err, files) { // '/' denotes the root folder
	// 	if (err) throw err;
	// 	files.forEach( function (file) {
	// 		fs.lstat('/'+file, function(err, stats) {
	// 			if (!err && stats.isDirectory()) { //conditing for identifying folders
	// 				//$('ul.list-dir').append('<li class="folder">'+file+'</li>');
	// 			}
	// 			else if(isMovieType(file)){
	// 				//$scope.fileList.push(cleanTitle(file));
	// 				infoMovie(cleanTitle(file));
	// 			}
	// 		});
	// 	});

	// });

	// function infoMovie(title){
	// 	movie(movieTitle(title.clean), function (err, data) {
	// 	    $scope.$apply(function () {
	// 		    if(data.Error || data.Poster=="N/A"){
	// 		    	console.log(title);
	// 		    	$scope.movieNotFound.push({'title': title.original, 'newName': title.clean});
	// 		    }
	// 		    else{
	// 		    	data.fileName = title.original;
	// 		    	data.Released = new Date(data.Released);
	// 		    	data.imdbRating = parseFloat(data.imdbRating);
	// 		    	$scope.movieList.push(data);
	// 				$rootScope.genreList = genreFilter($scope.movieList);

	// 		    }
	//         });
	// 	});
	// }

	// function cleanTitle(title){
	// 	var res = {};
	// 	var regexp="\\."+Parameters.extensions.join("|\\.")
	// 	var clean = title.replace(new RegExp(regexp, "gi"),'');
	// 	regexp=Parameters.uselessWords.join("|");
	// 	clean = clean.replace(new RegExp(regexp, "gi"),'');
	// 	regexp=Parameters.separators.join("|");
	// 	clean = clean.replace(new RegExp(regexp, "gi"),' ');
	// 	return { 'clean' : clean, 'original' : title };
	// }

	// function isMovieType(file){
	// 	var regexp = new RegExp("\\."+Parameters.extensions.join("|\\."),"gi");
	// 	return regexp.test(file);
	// }

	// $scope.renameFile = function(movie,$event){
	// 	var regexp="\\."+Parameters.extensions.join("|\\.");
	// 	var ext = movie.title.match(new RegExp(regexp, "gi"));
	// 	fs.rename(Parameters.directory+movie.title, Parameters.directory+movie.newName+ext[0], function(err) {
	// 	    if ( err ) $rootScope.showToast(Parameters.failRename,'alert');
	// 		$rootScope.showToast(Parameters.successRename,'success');

	// 	});
	// 	var closeEl = angular.element($event.target).parent().parent().parent().parent().children()[0];
	// 	angular.element(closeEl).triggerHandler("click");
	// 	infoMovie(cleanTitle(movie.newName));
	// 	$scope.movieNotFound.splice($scope.movieNotFound.indexOf(movie),1);
	// }

	// $scope.hideMovie = function(movie){
	// 	if($scope.movieNotFound.indexOf(movie) >= 0){
	// 		$scope.movieNotFound.splice($scope.movieNotFound.indexOf(movie),1);
	// 		$rootScope.showToast(Parameters.successHideFile,'success');
	// 	}
	// 	else if($scope.movieList.indexOf(movie) >= 0){
	// 		$scope.movieList.splice($scope.movieList.indexOf(movie),1);
	// 		$rootScope.showToast(Parameters.successHideFile,'success');
	// 	}
	// 	else
	// 		$rootScope.showToast(Parameters.failHideFile,'alert');
	// }

	// $scope.moreInfo = function(movie){
	// 	gui.Shell.openExternal("http://imdb.com/title/"+movie.imdbID);
	// }

	// $scope.playMovie = function(movie){
	// 	if(typeof movie.fileName !="undefined")
	// 		gui.Shell.openItem(Parameters.directory+movie.fileName);
	// 	else
	// 		gui.Shell.openItem(Parameters.directory+movie.title);

	// }

	function genreFilter(movie){
		var res = new Array();
		angular.forEach(movie, function(item) {
	        angular.forEach(item.Genre.split(','),function(genre){
	        	if(res.indexOf(genre.trim())<0){
	        		res.push(genre.trim());
	        	}
	        })
	    });
	    return res;

	}

}]);