'use strict';

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

describe('HomeCtrl', function(){
    var scope;//we'll use this scope in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('MyUSBMovieApp'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('HomeCtrl', {$scope: scope});
    }));
    // tests start here
    
    it('should have a toast content with "toto" and a class with "tata"', function(){
        scope.showToast('toto','tata');
        expect(scope.toastDetail.content).toBe("toto");
        expect(scope.toastDetail.className).toBe("tata");
    });

    it('should have a ratedColor function that return "#f44336" if the rate passed in parameter is equal or under 4, "#ff9800" if the rate passed in parameter is greater than 4 and equal or under 6, "#8bc34a" if the rate passed in parameter is greater than 6 and equal or under 8, "#8bc34a" if the rate passed in parameter is greater than 8', function(){
        expect(scope.ratedColor(0)).toBe("#f44336");
        expect(scope.ratedColor(2.3)).toBe("#f44336");
        expect(scope.ratedColor(4)).toBe("#f44336");
        expect(scope.ratedColor(4.3)).toBe("#ff9800");
        expect(scope.ratedColor(5)).toBe("#ff9800");
        expect(scope.ratedColor(6)).toBe("#ff9800");
        expect(scope.ratedColor(6.3)).toBe("#8bc34a");
        expect(scope.ratedColor(7)).toBe("#8bc34a");
        expect(scope.ratedColor(8)).toBe("#8bc34a");
        expect(scope.ratedColor(8.5)).toBe("#4caf50");
        expect(scope.ratedColor(9)).toBe("#4caf50");
        expect(scope.ratedColor(10)).toBe("#4caf50");
    });

    it('should have an initial order by Rating and an empty search', function(){
        expect(scope.searchText).toEqual({});
        expect(scope.order).toBe("-imdbRating");
    });

    it('should have a function loadMovies that throw an error message when failing to read directory', function(){
        expect(scope.loadNb).toBe(0);
        expect(scope.movieNotFound).toEqual(new Array());
        expect(scope.movieList).toEqual(new Array());
        expect(scope.errorLoadingMovies.length).not.toBe(0);

        scope.loadMovies("");
        expect(scope.movieNotFound).toEqual(new Array());
        expect(scope.movieList).toEqual(new Array());
        expect(scope.errorLoadingMovies).toBe("An error occured when reading directory");
        scope.loadMovies(null);
        expect(scope.movieNotFound).toEqual(new Array());
        expect(scope.movieList).toEqual(new Array());
        expect(scope.errorLoadingMovies).toBe("An error occured when reading directory");
        scope.loadMovies(undefined);
        expect(scope.movieNotFound).toEqual(new Array());
        expect(scope.movieList).toEqual(new Array());
        expect(scope.errorLoadingMovies).toBe("An error occured when reading directory");

        scope.loadMovies("randomRepo");
        expect(scope.errorLoadingMovies).not.toBe("An error occured when reading directory");

    });

    it('should have a function infoMovie that load movie information if found in movieList otherwise in movieNotFound', function(){

        expect(scope.infoMovie("title")).toBe('error');
        var title = {};
        title.clean =null;
        title.fullpath =null;
        title.original =undefined;
        expect(scope.infoMovie(title)).toBe('error');
        var test = {}
        test.clean = "pulp fiction";
        test.original = "mock";
        test.fullpath = "mock";
        expect(scope.infoMovie(test)).not.toBe('error');
    });

    it('should have a cleanTitle function which remove unnecessary words from title', function(){
        var res = {};
        res.clean = "pulp fiction";
        res.fullpath = "mock/mock";
        res.original = "pulp.fiction.1080p.mp4";
        expect(scope.cleanTitle("pulp.fiction.1080p.mp4","mock/mock")).toEqual(res);
        expect(scope.cleanTitle("","mock/mock")).toEqual(null);
        expect(scope.cleanTitle("pulp.fiction.1080p.mp4","")).toEqual(null);

    });

    it('should have a isMovieType function that tell if a file is a video file or not', function(){
        expect(scope.isMovieType("test")).toEqual(false);
        expect(scope.isMovieType("test.txt")).toEqual(false);
        expect(scope.isMovieType(null)).toEqual(false);
        expect(scope.isMovieType(undefined)).toEqual(false);
        expect(scope.isMovieType("video.mp4")).toEqual(true);
        expect(scope.isMovieType("video.mkv")).toEqual(true);
        expect(scope.isMovieType("video.avi")).toEqual(true);

    });


    it('should have a renameFile function that rename a file', function(){
        scope.renameFile("random");
        expect(scope.toastDetail.className).toEqual("alert");
        scope.toastDetail.className = "";
        scope.renameFile(null);
        expect(scope.toastDetail.className).toEqual("alert");
        scope.toastDetail.className = "";
        var movie = {};
        movie.title="mockVideo.mp4";
        movie.fullpath = process.execPath.split("node_modules")[0]+"tests/mockFiles/";
        movie.newName = "mockVideo";
        scope.renameFile(movie);
        expect(scope.toastDetail.className).toEqual("success");
    });

    it('should have hideMovie function that hide a movie from the application', function(){
        var movie = {};
        movie.title="pulp fiction";
        scope.movieList.push(movie);
        scope.hideMovie(movie);
        expect(scope.toastDetail.className).toEqual("success");
        expect(scope.movieList.length).toEqual(0);
        scope.movieNotFound.push(movie);
        scope.hideMovie(movie);
        expect(scope.toastDetail.className).toEqual("success");
        expect(scope.movieNotFound.length).toEqual(0);
        scope.hideMovie(null);
        expect(scope.toastDetail.className).toEqual("alert");
        scope.hideMovie("");
        expect(scope.toastDetail.className).toEqual("alert");

    });

    it('should have a moreInfo function that open IMDB movie informations in the user default browser', function(){
        var movie = {};
        movie.title = "pulp fiction";
        scope.moreInfo(movie);
        expect(scope.toastDetail.className).toEqual("alert");

    });

    it('should have a playMovie function that play the video file in the user default player', function(){
        var movie = {};
        movie.title = "pulp fiction";
        scope.playMovie(movie);
        expect(scope.toastDetail.className).toEqual("alert");
        
    });

    it('should have a openInExplorer function that open the movie file in the explorer', function(){
        var movie = {};
        movie.title = "pulp fiction";
        scope.openInExplorer(movie);
        expect(scope.toastDetail.className).toEqual("alert");
    });

    it('should have a genreFilter function that set up a genre list', function(){
        var movies = new Array();
        var movie1 = {};
        movie1.Genre = "drama, action";
        var movie2 = {};
        movie2.Genre = "drama, thriller";
        var movie3 = {};
        movie3.Genre = "drama,    action    ";
        var movie4 = {};
        movie3.Genre = "";
        var movie5 = {};
        movies.push(movie1);
        movies.push(movie2);
        movies.push(movie3);
        movies.push(movie4);
        movies.push(movie5);
        var res = new Array();
        res.push("drama");
        res.push("action");
        res.push("thriller");
        expect(res).toEqual(scope.genreFilter(movies));
    });




});