var linter = require('./index');
var testString = "{% capture %} Lorem ipsum dolor {% endcapture %}";

linter.lintString(testString, function(err) {
  if(err) {
    console.log(err);
  };
});