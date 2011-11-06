/*jslint indent: 2, browser: true*/
/*globals TestCase, tddjs, assertException, assertObject, assertClassName, assertNoMatch, assertNoException, assertSame*/

(function () {
  var tabController = tddjs.ui.tabController;

  //All test cases can share this setUp
  function setUp() {
    /*:DOC += <ol id = "tabs">
     * <li><a href="#news">News</a></li>
     * <li><a href="#sports">Sports</a></li>
     * <li><a href="#economy">Economy</a></li>
     * </ol>
     */
    this.tabs = document.getElementById('tabs');
    //alert(this.tabs);
  }
  function tearDown() {
    document.removeChild(this.tabs);   
  }
  
  TestCase('TabControllerCreateTest', {
    setUp : setUp,
    tearDonw: tearDown,
    'test should fail without element' : function () {
      assertException(function () {
        tabController.create();
      }, 'TypeError');
    },
    'test should fail without element class' : function () {
      assertException(function () {
        tabController.create({});
      }, 'TypeError');
    },
    'test should return object' : function () {
      var controller = tabController.create(this.tabs);
      assertObject(controller);
    },
    'test should add js-tabs class name to element' : function () {
      var tabs = tabController.create(this.tabs);
      assertClassName('js-tab-controller', this.tabs);
    }
  });
}());
