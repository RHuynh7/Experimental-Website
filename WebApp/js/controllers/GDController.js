app.controller('GDController', ['$scope', function GDController($scope) {
  $scope.title = 'Graphic Design';
  $scope.promo = 'Logos, Posters, And General Graphic Design Projects';
  $scope.products = [
    {
      name: 'Seudo Productions',
      cover: 'img/seudo-productions.jpg'
    },
    {
    	name: 'Gunfire',
    	cover: 'img/political.jpg'
  	},
    {
    	name: 'Visionaire Poster',
    	cover: 'img/Visionaire.jpg'
  	},
    {
    	name: 'Wolf Kings Poster',
    	cover: 'img/Wolf-Kings.jpg'
  	},
    {
      name: 'EXO Studios',
      cover: 'img/exo-studios.jpg'
    },
    {
    	name: 'Wiccan Sweets Shoppe',
    	cover: 'img/wiccan-sweets-shoppe.jpg'
  	},
    {
    	name: 'Sunrise Airlines',
    	cover: 'img/sunrise-airlines.jpg'
  	},
    {
    	name: 'Medieval Poker Club',
    	cover: 'img/medieval-poker-club.jpg'
  	},
    {
      name: 'Tweet Inc.',
      cover: 'img/tweet-inc.jpg'
    },
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
