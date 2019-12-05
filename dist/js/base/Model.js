"use strict";

window.Model = function (options) {
  var resourceName = options.resourceName;
  return {
    init: function init() {
      var APP_ID = 'qkjU6beGpFONIRbqGzkU6jlN-gzGzoHsz';
      var APP_KEY = 'Vh7nI7Et4NtOqM5P5TFnrPGx';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function fetch() {
      var query = new AV.Query(resourceName);
      return query.find(); // Promise 对象
    },
    save: function save(object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object);
    }
  };
};