export declare enum BackgroundThreadPriority {
    min = "MIN",
    max = "MAX",
    normal = "NORMAL"
}
declare const _default: {
    run: (callback: () => void | Function, priority?: BackgroundThreadPriority | undefined) => void;
    BackgroundThreadPriority: typeof BackgroundThreadPriority;
};
export default _default;
