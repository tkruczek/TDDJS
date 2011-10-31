(function (){
	var tabController = tddjs.ui.tabController;
	
	//All test cases can share this setUp
	function setUp() {
		/*: DOC += <ol id = "tabs">
		 * <li><a href="#news">News</a></li>
		 * <li><a href="#sports">Sports</a></li>
		 * <li><a href="#economy">Economy</a></li>
		 */
		this.tabs = document.getElementById('tabs');
	}
	
	TestCase('TabControllerCreateTest', {
		setUp: setUp,
		
		'test should fail without element' : function() {
			assertException(function() {
				tabController.create();
			}, 'TypeError');
		},
		
		'test should fail without element class' : function() {
			assertException(function() {
				tabController.create({});
			}, 'TypeError');
		}
	});
});
