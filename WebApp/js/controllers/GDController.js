app.controller('GDController', ['$scope', function GDController($scope) {
  $scope.title = 'Graphic Design';
  $scope.promo = 'Logos, Posters, And General Graphic Design Projects';
  $scope.products = [
    {
    	name: 'Visionaire Poster',
    	cover: 'img/Visionaire.jpg'
  	},
    {
    	name: 'Wolf Kings Poster',
    	cover: 'img/Wolf-Kings.jpg'
  	},
    {
      name: 'PSA Poster',
      cover: 'img/psa-poster.jpg'
    },
    {
      name: 'Intergalactic Doorway',
      cover: 'img/red-door.jpg'
    },
    {
      name: 'Species: Unknown',
      cover: 'img/goat.jpg'
    },
    {
      name: 'Seudo Productions',
      cover: 'img/seudo-productions-long.jpg'
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
    {
      name: 'Sunset',
      cover: 'img/Symmetrical Design.jpg'
    },
    {
      name: '',
      cover: 'img/Business Cards.jpg'
    },
    {
      name: '',
      cover: 'img/Inspirational Quote Design.jpg'
    },

  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
