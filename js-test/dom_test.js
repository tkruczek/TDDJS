/*jslint indent: 4, browser: true*/
/*globals TestCase, tddjs, assertClassName */
(function () {
    function setUp() {
        /*:DOC += <div id = 'dom-target'></div> */
        this.domTarget = document.getElementById('dom-target');
    }
    TestCase('DomTest', {
        setUp: setUp,
        'test should add class' : function () {
            tddjs.dom.addClassName(this.domTarget, 'test-class');
            assertClassName('test-class', this.domTarget);
        }  
    });
}());
