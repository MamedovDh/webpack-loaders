// swc-loader @swc/core

const swcLoader = {
	test: /\.tsx?$/,
	exclude: /(node_modules)/,
	use: {
		loader: "swc-loader",
		options: {
			jsc: {
				parser: {
					syntax: "typescript",
					jsx: true,
				},
				transform: {
					react: {
						pragma: 'React.createElement',
						pragmaFrag: 'React.Fragment',
						throwIfNamespace: true,
						development: isDev,
						useBuiltins: false,
						runtime: 'automatic',
					}
				}
			}
		}
	}
}