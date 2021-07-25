
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

    $scope.mensaje = 'Hola mundo';
    $scope.titulo = 'Este es el título';
    $scope.subtitulo = 'Este es el subtítulo';
    $scope.borradoMensaje = '';

    $scope.mostrar_alerta = function() {
        swal($scope.mensaje);
    };

    $scope.mostrar_subtitulo = function() {
        swal($scope.titulo, $scope.subtitulo);
    };

    $scope.mostrar_confirmacion = function() {
        swal({
                title: $scope.titulo,
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
             },
             function() {
                 $scope.borradoMensaje = "Archivo  borrado";
                 $scope.$apply();
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            }
        );
    };

    $scope.mostrar_input = function() {
        swal({
                title: "An input!",
                text: "Write something interesting:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "Write something"
             },
             function(inputValue) {
                 if(inputValue === false) return false;
                 if(inputValue === "") {
                     swal.showInputError("You need to write something!");
                     return false;
                 }
                 $scope.borradoMensaje = inputValue;
                 $scope.$apply();
                swal("Excelente!", "Escribiste: " + inputValue, "success");
            }
        );
    };


	
}]);
