app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Portfolio';
  $scope.promo = 'My works';
  $scope.products = [
  	{
    	name: 'Stargazer',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/stargazer.png',
    	likes: 0,
    	dislikes: 0
  	},
    {
    	name: 'Stargazer',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/stargazer.png',
    	likes: 0,
    	dislikes: 0
  	},
    {
    	name: 'Stargazer',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/stargazer.png',
    	likes: 0,
    	dislikes: 0
  	},
    {
    	name: 'Stargazer',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/stargazer.png',
    	likes: 0,
    	dislikes: 0
  	},
    {
    	name: 'Stargazer',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/stargazer.png',
    	likes: 0,
    	dislikes: 0
  	},
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
