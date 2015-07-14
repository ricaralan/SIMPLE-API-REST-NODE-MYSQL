var moduleUser = angular.module("module-user", []);

moduleUser.controller("userController", function ($scope, $http){

  $scope.users = [];
  $scope.userUpdate = {};

  $scope.init = function (){
    $scope.getUsers();
  };

  /**
  * GET ALL USERS DB
  */
  $scope.getUsers = function () {
    $http.get("/users/getUsers").success(function (users) {
      $scope.users = users;
    });
  };

  $scope.createUser = function () {
    json = encodeURIComponent(JSON.stringify({
      user_name : $scope.nameNewUser
    }));
    $http.post("/users/createUser/" + json).success(function(data){
      $scope.getUsers();
      $scope.nameNewUser = "";
    });
  };

  $scope.setUpdateUser = function (user_id) {
    $scope.userUpdate = $scope.getUserById(user_id);
    $scope.nameNewUser = $scope.userUpdate.user_name;
  };

  $scope.cancelUpdate = function () {
    $scope.userUpdate = {};
    $scope.nameNewUser = "";
  };

  $scope.updateUser = function () {
    json = encodeURIComponent(JSON.stringify({
      user_name : $scope.nameNewUser,
      user_id : $scope.userUpdate.user_id
    }));
    $http.put("/users/updateUser/" + json).success(function (data) {
      $scope.getUsers();
      $scope.cancelUpdate();
    });
  };

  $scope.deleteUser = function (user_id) {
    $http.delete("/users/deleteUser/"+user_id).success(function (data) {
      $scope.getUsers();
    });
  };

  $scope.getUserById = function (user_id) {
    for (var i = 0; i < $scope.users.length; i++) {
      if ($scope.users[i].user_id == user_id){
        return $scope.users[i];
      }
    }
    return null;
  };

});
