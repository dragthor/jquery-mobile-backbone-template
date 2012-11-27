// {{ name }}
_.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
};

var MyNameSpace = {};

MyNameSpace.Router = null;
MyNameSpace.Views = {};