portfolio.controller('Navbar',function($scope){
	$scope.hover=false;
	$scope.bg='clouds';
});
portfolio.controller('Skills',function($scope){
	$scope.lamp_list = ['Ajax','MySQL','CodeIgniter'];
	$scope.mean_list = ['MongoDB','Mongoose','Express.js','AngularJS','Node.js','Socket.io'];
	$scope.rails_list = ['SQLite','WEBrick','Gem Creation'];
	$scope.concepts_list = ['OOP','MVC','TDD','ORM','RESTful'];
	$scope.front_list = ['HTML5','CSS3','jQuery','jQuery UI','Responsive Web Design','LESS','SASS','HAML','Skeleton','Bootstrap'];
	$scope.tools_list = ['Git + GitHub','APIs','PhotoShop','Illustrator','InDesign','Balsamiq'];
});
portfolio.controller('Projects',function($scope){
	$scope.image=0;
	$scope.n=0;
	$scope.change_image=function(n){
		$scope.image=n;
	}
});