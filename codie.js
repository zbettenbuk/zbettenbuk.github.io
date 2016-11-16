(function(ext) {
  var baseUrl = "http://localhost:8080";
  ext._shutdown = function() {};

  ext._getStatus = function() {
    return {
      status: 2,
      msg: "Ready"
    };
  };

  ext.move = function(distance, speed, cb) {
    console.log("Move", distance, "mm with", speed, "speed");
    $.ajax({
      url: baseUrl + "/commands/move",
      method: "POST",
      dataType: "jsonp",
      data: {
        distance: distance,
        speed: speed
      },
      success: function(finished) {
        callback();
      }
    });
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      ["w", "move %n mm with %n speed", "move"]
    ]
  };

  // Register the extension
  ScratchExtensions.register("Codie extension", descriptor, ext);
})({});
