// sass-loader MiniCssExtractPlugin

const isProd = true

const sassLoader = {
	test: /\.s[ac]ss$/i,
	use: [
		isProd ? MiniCssExtractPlugin.loader : 'style-loader',
		cssLoader,
		{
			loader: "sass-loader",
		}
	],
}