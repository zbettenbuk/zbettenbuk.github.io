(function(ext) {
  var baseUrl = "http://localhost:8080";
  ext._shutdown = function() {};

  ext._getStatus = function() {
    return {
      status: 2,
      msg: "Ready"
    };
  };

  function sendCodieRequest(path, request, cb) {
    $.ajax({
      url: baseUrl + path,
      method: "GET",
      dataType: "jsonp",
      data: request,
      success: function(data) {
        cb(data);
      }
    });
  }

  ext.move = function(distance, speed, cb) {
    sendCodieRequest("/commands/move", {
      distance: distance,
      speed: speed
    }, cb);
  };

  ext.enableMotorBoth = function(leftSpeed, rightSpeed, cb) {
    sendCodieRequest("/commands/enableMotorBoth", {
      leftSpeed: leftSpeed,
      rightSpeed: rightSpeed
    }, cb);
  };

  ext.enableMotorLeft = function(speed, cb) {
    sendCodieRequest("/commands/enableMotorLeft", {
      speed: speed
    }, cb);
  };

  ext.enableMotorRight = function(speed, cb) {
    sendCodieRequest("/commands/enableMotorRight", {
      speed: speed
    }, cb);
  };

  ext.turn = function(angle, speed, cb) {
    sendCodieRequest("/commands/turn", {
      angle: angle,
      speed: speed
    }, cb);
  };

  ext.beep = function(volume, frequency, duration, cb) {
    sendCodieRequest("/commands/beep", {
      volume: volume,
      frequency: frequency,
      duration: duration
    }, cb);
  };

  ext.setColor = function(hue, saturation, value, cb) {
    sendCodieRequest("/commands/setColor", {
      hue: hue,
      saturation: saturation,
      value: value
    }, cb);
  };

  ext.setAnimation = function(animation, hue, saturation, repeat, speed, cb) {
    sendCodieRequest("/commands/setAnimation", {
      animation: animation,
      hue: hue,
      saturation: saturation,
      repeat: repeat,
      speed: speed
    }, cb);
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      ["w", "Move %n mm with %n speed", "move"],
      ["w", "Enable motors. Left %n Right %n", "enableMotorBoth"],
      ["w", "Set left motor speed to %n", "enableMotorLeft"],
      ["w", "Set right motor speed to %n", "enableMotorRight"],
      ["w", "Turn %n degrees with %n speed", "turn"],
      ["w", "Beep on %n volume, %n frequency and %n duration", "beep"],
      ["w", "Set color to H %n S %n V %n", "setColor"],
      ["w", "Start animation %n with H %n S%, repeat %n times and % speed", "setAnimation"]
    ]
  };

  // Register the extension
  ScratchExtensions.register("Codie extension", descriptor, ext);
})({});
