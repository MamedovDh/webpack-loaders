// css-loader

const isDev = false

const cssLoader = {
	loader: "css-loader",
	options: {
		esModule: false,
		modules: {
			localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
		}
	}
}