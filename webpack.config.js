var config = {
   entry: './root.tsx',
   output: {
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 8888
   },
   node: {
	  fs: "empty",
	  net: "empty",
	  tls: "empty"
  },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
		 {
			test: /\.scss$/,
			use: [
			{loader: "style-loader"},
			{loader: "css-loader" },
			{loader: "sass-loader"}]
		 },
		 {
			test: /\.tsx$/,
            exclude: /node_modules/,
            loader: 'ts-loader',			

		 }
      ]
   }
}
module.exports = config;