app.controller('HomeCtrl', ['$scope','$rootScope','Parameters','$mdToast','$interval', function ($scope,$rootScope,Parameters,$mdToast,$interval) {

	//Config var for setting up the info morphModal
	$rootScope.config = {
		closeEl: '.close',
		modal: {
	  		templateUrl: 'app/components/modal/info.html?t=000'
		}
	};
	//Config var for setting up the edit morphModal
	$rootScope.configNoCover = {
		closeEl: '.close',
		modal: {
	  		templateUrl: 'app/components/modal/edit.html?t=000'
		}
	};

	console.log(process.versions['node-webkit']);

	//Var containing the content of the alert toast
	$rootScope.toastDetail = {};

	/**
	* Hide the alert toast 
	**/
	$rootScope.closeToast = function() {
    	$mdToast.hide();
	};

	/**
	* Hide the window
	**/
	$rootScope.hideWindow = function(){
		gui.Window.get().minimize();
	}

	/**
	* Close the window
	**/	
	$rootScope.closeWindow = function(){
		gui.Window.get().close();
	}

	/**
	* Maximise the window
	**/
	$rootScope.maxWindow = function(){
		gui.Window.get().maximize();
	}

	/**
	* Set up the toast (content, template, position, classname) and show it
	* @param {string} content message display by the toast
	* @param {string} className class css added to the toast before showing it 
	**/
	$rootScope.showToast = function(content,className) {
		$rootScope.toastDetail.content = content;	
		$rootScope.toastDetail.className = className;	
	    $mdToast.show({
	      templateUrl: 'app/components/toast/toastView.html?t=00',
	      hideDelay: 4000,
	      position: "top left"
	    });
	};

	//Config var for the circular progress representing the rate for a movie
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

	/**
	* Give the css color code depending on the movie rate
	* @param {int} rate the movie rate
	* @return {string} css code
	**/
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

	/**
	* Format a date to the correct format YYYY-MM-DD
	* @param {date} the date to format 
	**/
	$scope.formatDate = function(date) {         
                                
        var yyyy = date.getFullYear().toString();                                    
        var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based         
        var dd  = date.getDate().toString();             
                            
        return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
   }; 



	/**
	* Search files recursively in the given folder parameter and call the infoMovie function for each video file.
	* @param {string} folder the folder where to look for video files
	**/
	$scope.loadMovies = function(folder){
		//var containing the error message when an error occured or when no video has been found
		$scope.errorLoadingMovies = Parameters.errorNoVideo;
		if(typeof folder == 'undefined' 
				|| folder=="" 
				|| folder == null){
			
			$scope.errorLoadingMovies = Parameters.errorReadDir;
				return;
		}

		fs.readdir(folder, function (err, files) { // '/' denotes the root folder
			if (err){
				$scope.errorLoadingMovies = Parameters.errorReadDir;
				return;
			}
			$rootScope.loadNb += files.length;
			$rootScope.loadTotal += files.length;
			files.forEach( function (file) {
				fs.lstat(folder+"/"+file, function(err, stats) {
					if (!err && stats.isDirectory()) { //conditing for identifying folders
						$rootScope.loadNb--;
						$scope.loadMovies(folder+"/"+file);
					}
					else if($scope.isMovieType(file)){
						//$scope.fileList.push(cleanTitle(file));
						$scope.infoMovie($scope.cleanTitle(file, folder+"/"));
					}
					else
						$rootScope.loadNb--;
				});
			});
		});
	}

	/**
	* Look for informations about the movie title given in parameter. If no info found the title is added in the movieNotFound array otherwise
	* the movie info are added in the movieList array. Also we update the genre list.
	* @param {object} title :
	* 	title.original : must contain the filename where the title has been extracted from 
	* 	title.fullpath : must contain the full path to the file where the title has been extracted from
	* 	title.clean : must contain the movie name
	* @return {string} 'error' when the title parameter is not correct
	**/
	$scope.infoMovie = function(title){
		if(typeof title == 'undefined' 
				|| title=="" 
				|| title == null
				|| typeof title.clean == 'undefined'
				|| typeof title.original == 'undefined'
				|| typeof title.fullpath == 'undefined'
				|| title.clean == ''
				|| title.original == ''
				|| title.fullpath == ''
				|| title.clean == null
				|| title.original == null
				|| title.fullpath == null
				){
			    $rootScope.loadNb--;
				return 'error';
		}
		movie(movieTitle(title.clean), function (err, data) {
		    $scope.$apply(function () {
			    if(typeof data == "undefined" || data.Error || data.Poster=="N/A"){
			    	$scope.movieNotFound.push({'title': title.original, 'newName': title.clean, 'fullpath' : title.fullpath});
			    }
			    else{
			    	if(data.Type != "series"){
				    	data.fileName = title.original;
				    	data.Released = new Date(data.Released);
				    	data.imdbRating = parseFloat(data.imdbRating);
				    	data.fullpath = title.fullpath;
				    	if(typeof data.Plot != "undefined" && data.Plot.length > 550){
				    		data.Plot = data.Plot.substring(0,550)+"...";
				    	}
			    		$scope.movieList.push(data);
						$rootScope.genreList = $scope.genreFilter($scope.movieList);
					}

			    }
			    $rootScope.loadNb--;
	        });
		});
	}
	/**
	* Remove unnecessary words from title in order to have a clean movie name
	* @param {string} title : the filename to clean
	* @param {string} fullpath : fullpath to the file 
	* @return {object} obj or null if error
	* 	obj.clean : the cleaned title
	* 	obj.original : the title before cleaning
	* 	obj.fullpath : fullpath to the file 
	**/
	$scope.cleanTitle = function(title,fullpath){
		if(typeof title == 'undefined' 
				|| title=="" 
				|| title == null
				|| typeof fullpath == 'undefined' 
				|| fullpath=="" 
				|| fullpath == null){
			return null;
		}
		var res = {};
		var regexp="\\."+Parameters.extensions.join("|\\.")
		var clean = title.replace(new RegExp(regexp, "gi"),'');
		regexp=Parameters.uselessWords.join("|");
		clean = clean.replace(new RegExp(regexp, "gi"),'');
		regexp=Parameters.separators.join("|");
		clean = clean.replace(new RegExp(regexp, "gi"),' ');
		return { 'clean' : clean.trim(), 'original' : title, 'fullpath' : fullpath };
	}

	/**
	* Test if a filename end with an extension corresponding to a video file
	* @return {boolean} true if it's a video file, false either
	**/
	$scope.isMovieType = function(file){
		var regexp = new RegExp("\\."+Parameters.extensions.join("|\\."),"gi");
		return regexp.test(file);
	}

	/**
	* Rename file associate to the movie object given in parameter
	* @param {object} movie the movie to rename
	* @param {object} event who triggered the function
	**/
	$scope.renameFile = function(movie,$event){
		try{
			var regexp="\\."+Parameters.extensions.join("|\\.");
			var ext = movie.title.match(new RegExp(regexp, "gi"));
			movie.newName = movie.newName.replace(new RegExp(" ", 'g'),'.');
			var closeEl = (typeof $event != 'undefined') ? angular.element($event.target).parent().parent().parent().parent().children()[0] : "";
			fs.renameSync(movie.fullpath+movie.title, movie.fullpath+movie.newName+ext[0]);
			$rootScope.showToast(Parameters.successRename,'success');
			if(closeEl != "")
				angular.element(closeEl).triggerHandler("click");
			$scope.movieNotFound.splice($scope.movieNotFound.indexOf(movie),1);
			$rootScope.loadNb++;
			$scope.infoMovie($scope.cleanTitle(movie.newName+ext[0],movie.fullpath));
		}
		catch(err){
			console.log(err);
			$rootScope.showToast(Parameters.failRename,'alert');
			return;
		}
		
	}

	/**
	* Hide a movie from the application list
	* @param {object} movie the movie to hide from the application
	**/
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

	/**
	* Open a link to imdb with more informations about the movie in the default browser 
	* @param {object} movie
	**/
	$scope.moreInfo = function(movie){
		if(typeof movie!= "undefined" && typeof movie.imdbID != "undefined"){
			gui.Shell.openExternal("http://imdb.com/title/"+movie.imdbID);
		}
		else
			$rootScope.showToast(Parameters.failMoreInfo,'alert');
	}

	/**
	* Play the movie file with the default player
	* @param {object} movie : the movie to play
	**/
	$scope.playMovie = function(movie){
		if(typeof movie!= "undefined" 
			&& typeof movie.fullpath != "undefined" 
			&& typeof movie.fileName != "undefined")
			gui.Shell.openItem(movie.fullpath+movie.fileName);
		else if(typeof movie!= "undefined" 
			&& typeof movie.fullpath != "undefined" 
			&& typeof movie.title != "undefined")
			gui.Shell.openItem(movie.fullpath+movie.title);
		else
			$rootScope.showToast(Parameters.failPlayMovie,'alert');

	}

	/**
	* Show the movie file in an explorer
	* @param {object} movie : the movie to show in an explorer
	**/
	$scope.openInExplorer = function(movie){
		if(typeof movie!= "undefined" 
			&& typeof movie.fullpath != "undefined" 
			&& typeof movie.fileName != "undefined")
			gui.Shell.showItemInFolder(movie.fullpath+movie.fileName);
		else if(typeof movie!= "undefined" 
			&& typeof movie.fullpath != "undefined" 
			&& typeof movie.title != "undefined")
			gui.Shell.showItemInFolder(movie.fullpath+movie.title);
		else
			$rootScope.showToast(Parameters.failOpenMovie,'alert');
	}

	/**
	* Extract the genre from each movie in order to make a list
	* @param {Array} array of movie object
	* @return {Array} array of genre (string)
	**/
	$scope.genreFilter = function(movies){
		var res = new Array();
		angular.forEach(movies, function(movie) {
			if(typeof movie != "undefined" && typeof movie.Genre != "undefined" && movie.Genre != "")
	        angular.forEach(movie.Genre.split(','),function(genre){
	        	if(res.indexOf(genre.trim())<0){
	        		res.push(genre.trim());
	        	}
	        })
	    });
	    return res;

	}

	/**
	* Clear the movie list and the movie not found list. Search for movie in the folder given in parameter
	* @param {object} the folder where to search for movies
	**/
	$rootScope.reloadMovies = function(folder){
		$rootScope.loadTotal = 0;
	    $scope.determinateValue = 0;
		$rootScope.loadNb = 0;
		$scope.movieNotFound = new Array();
		$scope.movieList = new Array();
		$rootScope.currentFolder = folder.value+"/";
		$scope.loadMovies(folder.value);
		loading = $interval(function() {
	        loadingFunc();
      	}, 100, 0, true);

	}	

	//init search text and order the movie list
	$rootScope.searchText = {};
	$rootScope.order = "-imdbRating";

	//dependency
	var fs = require('fs');
	var gui = require("nw.gui");
	var movieTitle = require('movie-title');
	var movie = require('node-movie');

	/**
	* Calculate the loading percentage when searching for movies in a folder
	**/
	var loadingFunc = function(){
		$scope.determinateValue = parseInt((($rootScope.loadTotal - $rootScope.loadNb)/$rootScope.loadTotal)*100);
        if($scope.determinateValue == 100)
        	$interval.cancel(loading);
	}

	$rootScope.loadTotal = 0;
    $scope.determinateValue = 0;
	$rootScope.loadNb = 0;
	var loading = $interval(function() {
        loadingFunc();
      }, 100, 0, true);

	$scope.movieNotFound = new Array();
	$scope.movieList = new Array();

	$rootScope.currentFolder = "/Users/joris/Downloads/Folx/movie/";
	$rootScope.currentFolder = global.window.root;
	$scope.loadMovies($rootScope.currentFolder); 

	

}]);