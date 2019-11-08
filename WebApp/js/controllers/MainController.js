app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Digital Art';
  $scope.promo = 'Art created with Photoshop and/or SAI Paint Tool';
  $scope.products = [
  	{
    	name: 'Stargazer',
    	cover: 'img/stargazer.png'
  	},
    {
      name: 'Stargazer',
      cover: 'img/Stargazer-feather-hoop.png'
    },
    {
      name: 'LOONA Galaxy',
      cover: 'img/loona-black.png'
    },
    {
      name: 'LOONA Galaxy',
      cover: 'img/loona-white.png'
    },

    {
      name: 'Blind Owl',
      cover: 'img/blind-owl.jpg'
    },
    {
      name: 'Moon',
      cover: 'img/shinee-moon.jpg'
    },
    {
      name: 'Gunfire',
      cover: 'img/political.jpg'
    },
    {
      name: 'Stargazer',
      cover: 'img/stargazer-one.png'
    },
    {
      name: 'Stargazer',
      cover: 'img/stargazer-original.png'
    },
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
