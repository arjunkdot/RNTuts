module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@/components": "./components",
            "@/screens": "./screens",
            "@/assets": "./assets",
            "@/utils": "./utils",
            "@/styles": "./styles",
            "@/data": "./data",
            "@/store": "./store",
          },
        },
      ],
    ],
  };
};
