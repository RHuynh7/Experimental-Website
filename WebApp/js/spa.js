var app = angular.module('spaApp',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'HomeController',
      templateUrl: 'app/views/home.html'
    })
    .when('/about',
      {
        controller: 'AboutController',
        templateUrl: 'app/views/about.html'
      })
   .when('/contact',
      {
        controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
      })
    .when('/illustrations',
      {
        controller: 'IllController',
        templateUrl: 'app/views/illustrations.html'
      })
   .when('/digital',
      {
        controller: 'MainController',
        templateUrl: 'app/views/digital.html'
      })
  .when('/graphic',
     {
       controller: 'GDController',
       templateUrl: 'app/views/graphic.html'
     })
   .when('/indesign',
      {
        controller: 'IDController',
        templateUrl: 'app/views/graphic.html'
      })
    .when('/paintings',
       {
         controller: 'PController',
         templateUrl: 'app/views/paintings.html'
       })
   .when('/lightbox',
      {
        controller: 'GDController',
        templateUrl: 'app/views/lightbox.html'
      })
});

app.controller('IllController', ['$scope', function IllController($scope) {
  $scope.title = 'Illustrations';
  $scope.promo = 'Illustrations using pencil, pen, and/or marker';
  $scope.products = [
    {
      name: 'Untitled',
      cover: 'img/mash.jpg'
    },
    {
      name: 'Butterfly',
      cover: 'img/butterfly.png'
    },
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);

app.controller('AboutController', function($scope){
  $scope.customerID = 5;
});

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
      name: 'Rebecca',
      cover: 'img/name-logo.jpg'
    },
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);

app.controller('ContactController', function($scope){
  $scope.customerID = 5;
});

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

app.controller('IDController', ['$scope', function($scope) {
  $scope.title = 'InDesign';
  $scope.promo = 'Art And Newspaper Pages Made With InDesign';
  $scope.products = [
  	{
    	name: 'The Verdict - November 2016',
    	cover: 'img/1-Nov.jpg'
  	},
    {
    	name: 'The Verdict - December 2016',
    	cover: 'img/2-Dec.jpg'
  	},
    {
    	name: 'The Verdict - January February 2017',
    	cover: 'img/3-Jan-F-1.jpg'
  	},
    {
    	name: 'The Verdict - January February 2017',
    	cover: 'img/4-Jan-F-2.jpg'
  	},
    {
      name: 'The Verdict - March 2017',
      cover: 'img/5-March-O-1.jpg'
    },
    {
      name: 'The Verdict - March 2017',
      cover: 'img/6-March-O-2.jpg'
    },
    {
      name: 'The Verdict - April 2017',
      cover: 'img/7-April-O.jpg'
    },
    {
      name: 'The Verdict - May 2017',
      cover: 'img/8-May-O-1.jpg'
    },
    {
      name: 'The Verdict - June 2017',
      cover: 'img/10-June-O.jpg'
    },
    {
      name: 'The Verdict - September October 2017',
      cover: 'img/SeptOct-2017.jpg'
    },
    {
      name: 'The Verdict - November December 2017',
      cover: 'img/Nov-Dec-1.jpg'
    },
    {
      name: 'The Verdict - November December 2017',
      cover: 'img/Nov-Dec-2.jpg'
    },
    {
      name: 'The Verdict - January 2018',
      cover: 'img/Jan-2018.jpg'
    },
    {
      name: 'The Verdict - February 2018',
      cover: 'img/Feb-2018-F.jpg'
    },
    {
      name: 'The Verdict - February 2018',
      cover: 'img/Feb-2018-O.jpg'
    },
    {
      name: 'The Verdict - April 2018',
      cover: 'img/April-2018-O-1.jpg'
    },
    {
      name: 'The Verdict - April 2018',
      cover: 'img/April-2018-O-2.jpg'
    },
    {
      name: 'The Verdict - June 2018',
      cover: 'img/June-2018.jpg'
    },
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);

app.controller('PController', ['$scope', function GDController($scope) {
  $scope.title = 'Paintings';
  $scope.promo = '';
  $scope.products = [
    {
      name: '',
      cover: ''
    },

  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);

app.controller('HomeController', function($scope) {
  $scope.customers = [
      {"id": 1, "name":"Ted", "total": 5.996},
      {"id": 2, "name":"Michelle", "total": 10.994},
      {"id": 3, "name":"Zed", "total": 10.99},
      {"id": 4, "name":"Tina", "total": 15.994}
    ];
  });
