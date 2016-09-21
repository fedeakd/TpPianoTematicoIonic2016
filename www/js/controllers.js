angular.module('app.controllers', [])

.controller('presentacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pianoCtrl', 
  function ($scope, $stateParams,$ionicPlatform, $timeout, $cordovaNativeAudio,Informacion,$cordovaFile,$cordovaVibration) {
   var vm = this;
   $scope.yaguardo=false;
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
        	console.log("No estas en un celular");
        }
      });

   $scope.play = function(sound) {
     $cordovaVibration.vibrate(500);
    if(Informacion.artista.sonidos.length ==6){
       
      Informacion.artista.sonidos.unshift(sound); 
      Informacion.artista.sonidos.pop();   
    }
    else{
      Informacion.artista.sonidos.push(sound);
    }

    console.log(Informacion.artista.sonidos);
    try{
      $cordovaNativeAudio.play(sound);
    }catch(e){
      console.log("No estas en un celular");
    }
  }
  $scope.Guardame= function(){
    if(Informacion.artista.sonidos.length==0){
      alert("Debes seleccionar por lo menos un sonido ");
    }

    $ionicPlatform.ready(  function() {
     $cordovaFile.readAsText(cordova.file.externalRootDirectory, "matrix123.txt")
     .then(function(success) {
       arrayUsuarios=JSON.parse(success);
       if(!$scope.yaguardo){
        arrayUsuarios.push(Informacion.artista);
        $scope.yaguardo=true;
      }
      else{
        arrayUsuarios[arrayUsuarios.length-1]=Informacion.artista;
      }
      try{
        $ionicPlatform.ready(function() {
          $cordovaFile.writeFile(cordova.file.externalRootDirectory, "matrix123.txt", JSON.stringify(arrayUsuarios), true)
          .then(function (success) {

          }, function (error) {
          });

        });
      }
      catch(e){
        console.log("no es un celular");
      }

    }, function(error){
      alert('didn\'t find the file: ' + error.code);
    })
   });


  }
  function leer(){
   $ionicPlatform.ready(  function() {
     $cordovaFile.readAsText(cordova.file.externalRootDirectory, "matrix123.txt")
     .then(function(success) {
       arrayUsuarios=JSON.parse(success);
       $scope.algo="siLlego";


     }, function(error){
      alert('didn\'t find the file: ' + error.code);
    })
   });
 }



})

.controller('usuariosCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$cordovaFile,$ionicPlatform,$cordovaNativeAudio,$cordovaVibration) {

    $scope.arrayUsuarios=[];
 // $scope.arrayUsuarios=[{jugador:'fede',estado:'none'  ,apellido:'none',sonidos:['caballo','gato','gato']},
 // {jugador:'fede' ,estado:'none',apellido:'santamaria',sonidos:['caballo','gallo','gato']}];
 // $scope.arrayUsuarios.push({jugador:'josefa',apellido:'nidea',estado:"none",sonidos:['caballo','gallo','gato','puerco','lechuza','leon']});
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
          console.log("No estas en un celular");
        }
      });

  $scope.play = function(sound) {
    try{
      $cordovaNativeAudio.play(sound);
      $cordovaVibration.vibrate(500);
    }
    catch(e){
      console.log("No estas en un celular");
    }
  }
  $scope.MostrarContenedor=function(num){
    console.log(num);

    if($scope.arrayUsuarios[num].estado==='none'){
      $scope.arrayUsuarios[num].estado="show";
    }
    else{
      $scope.arrayUsuarios[num].estado="none";
    }

  }

  try{

    $cordovaFile.readAsText(cordova.file.externalRootDirectory, "matrix123.txt")
    .then(function(success) {
      $scope.arrayUsuarios=JSON.parse(success);


    }, function(error){
      alert('didn\'t find the file: ' + error.code);
    })}
    catch(e){
      console.log("no es celu");
    }
  })

.controller('loginCtrl', ['$scope','$stateParams','$state', 'Informacion', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,Informacion) {
  $scope.usuario={};
  $scope.usuario.nombre="";
  $scope.Iniciar=function(){
		//Informacion.artista.jugador=$scope.usuario.nombre;
    Informacion.artista.jugador=$scope.usuario.nombre;
    $state.go("tabsController.piano");

  }

}]).controller('GeneralCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$cordovaFile,$ionicPlatform,$cordovaNativeAudio,$timeout,$location, $ionicHistory,$log) {

})
