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


	var fs = require('fs');
	var movie = require('node-movie');
	var movieTitle = require('movie-title');
	var gui = require("nw.gui");
	$scope.loadNb = 0;
	$scope.movieNotFound = new Array();
	$scope.movieList = new Array();
	$rootScope.currentFolder = global.window.root;
	loadMovies($rootScope.currentFolder);


	function loadMovies(folder){
		fs.readdir(folder, function (err, files) { // '/' denotes the root folder
			if (err) console.log("erreur de lecture de "+folder);
			$scope.loadNb += files.length;
			files.forEach( function (file) {
				fs.lstat(folder+"/"+file, function(err, stats) {
					if (!err && stats.isDirectory()) { //conditing for identifying folders
						$scope.loadNb--;
						loadMovies(folder+"/"+file);
					}
					else if(isMovieType(file)){
						//$scope.fileList.push(cleanTitle(file));
						infoMovie(cleanTitle(file, folder+"/"));
					}
					else
						$scope.loadNb--;
				});
			});

		});
	}

	function infoMovie(title){
		movie(movieTitle(title.clean), function (err, data) {
		    $scope.$apply(function () {
			    if(data.Error || data.Poster=="N/A"){
			    	$scope.movieNotFound.push({'title': title.original, 'newName': title.clean, 'fullpath' : title.fullpath});
			    }
			    else{
			    	data.fileName = title.original;
			    	data.Released = new Date(data.Released);
			    	data.imdbRating = parseFloat(data.imdbRating);
			    	data.fullpath = title.fullpath;
			    	$scope.movieList.push(data);
					$rootScope.genreList = genreFilter($scope.movieList);

			    }
			    $scope.loadNb--;
	        });
		});
	}

	function cleanTitle(title,fullpath){
		var res = {};
		var regexp="\\."+Parameters.extensions.join("|\\.")
		var clean = title.replace(new RegExp(regexp, "gi"),'');
		regexp=Parameters.uselessWords.join("|");
		clean = clean.replace(new RegExp(regexp, "gi"),'');
		regexp=Parameters.separators.join("|");
		clean = clean.replace(new RegExp(regexp, "gi"),' ');
		return { 'clean' : clean, 'original' : title, 'fullpath' : fullpath };
	}

	function isMovieType(file){
		var regexp = new RegExp("\\."+Parameters.extensions.join("|\\."),"gi");
		return regexp.test(file);
	}

	$scope.renameFile = function(movie,$event){
		var regexp="\\."+Parameters.extensions.join("|\\.");
		var ext = movie.title.match(new RegExp(regexp, "gi"));
		fs.rename(movie.fullpath+movie.title, movie.fullpath+movie.newName+ext[0], function(err) {
		    if ( err )
		    	$rootScope.showToast(Parameters.failRename,'alert');
		    else
				$rootScope.showToast(Parameters.successRename,'success');

		});
		var closeEl = angular.element($event.target).parent().parent().parent().parent().children()[0];
		angular.element(closeEl).triggerHandler("click");
		infoMovie(cleanTitle(movie.newName+ext[0],movie.fullpath));
		$scope.movieNotFound.splice($scope.movieNotFound.indexOf(movie),1);
	}

	$scope.hideMovie = function(movie){
		if($scope.movieNotFound.indexOf(movie) >= 0){
			$scope.movieNotFound.splice($scope.movieNotFound.indexOf(movie),1);
			$rootScope.showToast(Parameters.successHideFile,'success');
		}
		else if($scope.movieList.indexOf(movie) >= 0){
			$scope.movieList.splice($scope.movieList.indexOf(movie),1);
			$rootScope.showToast(Parameters.successHideFile,'success');
		}
		else
			$rootScope.showToast(Parameters.failHideFile,'alert');
	}

	$scope.moreInfo = function(movie){
		gui.Shell.openExternal("http://imdb.com/title/"+movie.imdbID);
	}

	$scope.playMovie = function(movie){
		if(typeof movie.fileName !="undefined")
			gui.Shell.openItem($rootScope.currentFolder+movie.fileName);
		else
			gui.Shell.openItem($rootScope.currentFolder+movie.title);

	}

	$scope.openInExplorer = function(movie){
		console.log()
		if(typeof movie.fileName !="undefined")
			gui.Shell.showItemInFolder(movie.fullpath+movie.fileName);
		else
			gui.Shell.showItemInFolder(movie.fullpath+movie.title);
	}

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

	$rootScope.reloadMovies = function(folder){
		$scope.movieNotFound = new Array();
		$scope.movieList = new Array();
		$rootScope.currentFolder = folder.value+"/";
		loadMovies(folder.value);
	}

}]);