"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BackgroundThreadPriority = void 0;

var _reactNative = require("react-native");

const {
  BackgroundThread
} = _reactNative.NativeModules;
let BackgroundThreadPriority;
exports.BackgroundThreadPriority = BackgroundThreadPriority;

(function (BackgroundThreadPriority) {
  BackgroundThreadPriority["min"] = "MIN";
  BackgroundThreadPriority["max"] = "MAX";
  BackgroundThreadPriority["normal"] = "NORMAL";
})(BackgroundThreadPriority || (exports.BackgroundThreadPriority = BackgroundThreadPriority = {}));

const run = (callback, priority) => {
  if (priority) {
    BackgroundThread.runInBackground_withPriority(priority, () => {
      callback();
    });
  } else {
    BackgroundThread.runInBackground(() => {
      callback();
    });
  }
};

var _default = {
  run,
  BackgroundThreadPriority
};
exports.default = _default;
//# sourceMappingURL=index.js.map