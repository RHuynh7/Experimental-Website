app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Artwork';
  $scope.promo = 'A combination of digital and traditional art';
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
      name: 'Stargazer',
      cover: 'img/stargazer-one.png'
    },
    {
      name: 'Stargazer',
      cover: 'img/stargazer-original.png'
    },
    {
      name: 'LOONA Galaxy',
      cover: 'img/loona-black.png'
    },
    {
      name: 'Seudo Productions',
      cover: 'img/seudo-productions.jpg'
    },
    {
      name: 'Untitled',
      cover: 'img/mash.jpg'
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
      name: 'Blind Owl',
      cover: 'img/blind-owl.jpg'
    },
    {
      name: 'Moon',
      cover: 'img/shinee-moon.jpg'
    },
    {
      name: 'Butterfly',
      cover: 'img/butterfly.png'
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
