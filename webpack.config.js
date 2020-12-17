module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          loader: "style-loader!css-loader?modules=true",
          options: {
            url: true,
          },
        },
      ],
    },
  };