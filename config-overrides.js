module.exports = function override(config, env) {
  let loaders = config.module.rules[1].oneOf;
  loaders.splice(loaders.length - 1, 0, {
    test: /\.(png|jpg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  });
  loaders.splice(loaders.length - 1, 0, {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  return config;
};
