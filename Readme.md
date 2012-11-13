serialize.js
============

A small JavaScript library to serialize a form in to
`application/x-www-form-urlencoded ` data.
Useful when posting forms via AJAX, as either a GET query string or POST data.

This library has no dependencies, so you can just drop it in and use it.

Installing
----------

Add the `serialize.js` script:

	<script src="js/libs/serialize.js"></script>

Using
-----

The main function of this library is `FormSerializer.serialize()`.
Pass in a form, like so:

	var form = document.getElementById('form');
	var data = FormSerializer.serialize(form);

`data` can now be used as the `POST` body of an `XMLHttpRequest`,
or as a query string in a `GET` request.

What gets serialized
--------------------

Elements get serialized according to the [W3C spec for form submission][w3c],
with the following caveats:

* Buttons and submit elements are *not* encoded, ever.
* File fields are ignored.

[w3c]: http://www.w3.org/TR/html401/interact/forms.html#successful-controls
