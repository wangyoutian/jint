/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-286.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is generic own accessor property of 'O', and 'desc' is accessor descriptor, test TypeError is thrown when updating the [[Set]] attribute value of 'name' (15.4.5.1 step 5)
 */


function testcase() {

        var arrObj = [];

        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }
        Object.defineProperty(arrObj, "property", {
            set: setFunc
        });
        try {
            Object.defineProperty(arrObj, "property", {
                set: function () {}
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, "property", undefined, setFunc, "setVerifyHelpProp", false, false);
        }
    }
runTestCase(testcase);