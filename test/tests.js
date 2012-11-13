/*jshint browser:true */
/*globals FormSerializer */
/*globals deepEqual equal ok assert test module */
(function() {
	"use strict";
	module("Serialize");

	test("Simple form", function() {
		equal(
			FormSerializer.serialize(document.getElementById('simple')),
			[
				"simple-input=foo",
				"simple-textarea=bar",
				"simple-select=baz",
				"simple-multiselect=multi-2",
				"simple-multiselect=multi-4",
				"simple-checkbox=1",
				"simple-radio=1"
			].join('&'),
			"Simple form serializes correctly"
		);
	});

	test("Checkboxes", function() {
		equal(
			FormSerializer.serialize(document.getElementById('checkbox')),
			[
				"checkbox-checked=1",
				"checkbox-multi=3",
				"checkbox-multi=4"
			].join('&'),
			"Checkboxes serialize correctly"
		);
	});

	test("Radios", function() {
		equal(
			FormSerializer.serialize(document.getElementById('radio')),
			"radio-radio=3",
			"Radios serialize correctly"
		);
	});

	test("Not serializable", function() {
		equal(
			FormSerializer.serialize(document.getElementById('not-serialized')),
			"",
			"Buttons and file inputs do not serialize"
		);
		equal(
			FormSerializer.serialize(document.getElementById('disabled')),
			"",
			"Disabled elements do not serialize"
		);
		equal(
			FormSerializer.serialize(document.getElementById('not-a-form')),
			undefined,
			"Non-form elements do not serialize"
		);
	});

})();
