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
