// ts-loader

const tsLoader = {
	exclude: /node_modules/,
	test: /\.tsx?$/,
	use: [
		{
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
				getCustomTransformers: () => ({
					before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
				}),
			}
		}
	]
}