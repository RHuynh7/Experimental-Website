app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{
    	name: 'The Book of Trees',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/the-book-of-trees.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Program or be Programmed',
    	price: 8,
    	pubdate: new Date('2013', '08', '01'),
    	cover: 'img/program-or-be-programmed.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Harry Potter & The Prisoner of Azkaban',
    	price: 11.99,
    	pubdate: new Date('1999', '07', '08'),
    	cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Ready Player One',
    	price: 7.99,
    	pubdate: new Date('2011', '08', '16'),
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    	likes: 0,
    	dislikes: 0
  	},
    {
    	name: 'Overstock deals',
    	price: 7.99,
    	pubdate: new Date('2011', '08', '16'),
    	cover: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_OD_T_260x260_B07L1354VW._SY260_CB450553798_.jpg',
    	likes: 0,
    	dislikes: 0
  	},
    {
      name: 'Find unique gifts',
      price: 7.99,
      pubdate: new Date('2011', '08', '16'),
      cover: 'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Social_Shopping/B07MNNZ9XW-260._SY260_CB452654247_.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Overstock deals',
      price: 7.99,
      pubdate: new Date('2011', '08', '16'),
      cover: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_OD_T_260x260_B07L1354VW._SY260_CB450553798_.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Overstock deals',
      price: 7.99,
      pubdate: new Date('2011', '08', '16'),
      cover: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_OD_T_260x260_B07L1354VW._SY260_CB450553798_.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
