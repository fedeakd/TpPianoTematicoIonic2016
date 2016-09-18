angular.module('app.controllers', ['ionic', 'ngCordova'])

.controller('presentacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pianoCtrl', ['$scope', '$stateParams','$ionicPlatform', '$timeout',  '$cordovaNativeAudio', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPlatform, $timeout, $cordovaNativeAudio) {
	var vm = this;
	$scope.siLlego="no";
	$ionicPlatform.ready(function() {

        // all calls to $cordovaNativeAudio return promises
        try{
        	$cordovaNativeAudio.preloadSimple('caballo', 'sonidos/Caballo.mp3');
        	$cordovaNativeAudio.preloadSimple('puerco', 'sonidos/Cerdo.mp3');
        	$cordovaNativeAudio.preloadSimple('gallo', 'sonidos/Gallo.mp3');
        	$cordovaNativeAudio.preloadSimple('gato', 'sonidos/Gato.mp3');
        	$cordovaNativeAudio.preloadSimple('lechuza', 'sonidos/Lechuza.mp3');
        	$cordovaNativeAudio.preloadSimple('leon', 'sonidos/Leon.mp3');
        }
        catch( e){
        	alert("No estas en un celular");
        }
    });

	$scope.play = function(sound) {
		$scope.siLlego="si";
		$cordovaNativeAudio.play(sound);
	};


}])

.controller('usuariosCtrl', ['$scope', '$stateParams','$state', '$cordovaFile',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$cordovaFile) {

$cordovaFile.writeFile(window.cordova.file.dataDirectory, "file.txt", "text", true)
  .then(function (success) {
    // success
  }, function (error) {
    // error
  });
}])

.controller('loginCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state) {
	$scope.Iniciar=function(){
		//Informacion.jugador=$scope.usuario.nombre;
		$state.go("tabsController.piano");

	}

}])
