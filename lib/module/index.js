import { NativeModules } from 'react-native';
const {
  BackgroundThread
} = NativeModules;
export let BackgroundThreadPriority;

(function (BackgroundThreadPriority) {
  BackgroundThreadPriority["min"] = "MIN";
  BackgroundThreadPriority["max"] = "MAX";
  BackgroundThreadPriority["normal"] = "NORMAL";
})(BackgroundThreadPriority || (BackgroundThreadPriority = {}));

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

export default {
  run,
  BackgroundThreadPriority
};
//# sourceMappingURL=index.js.map