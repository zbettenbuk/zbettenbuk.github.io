(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.move = function (distance, speed, cb) {
      console.log("Move", distance, "mm with", speed, "speed");
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ["w", "move %n mm with %n speed", "move"]
        ]
    };

    // Register the extension
    ScratchExtensions.register('Codie extension', descriptor, ext);
})({});
