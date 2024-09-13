// esbuild-loader

const esbuildLoader = {
	test: /\.tsx?$/,
	loader: 'esbuild-loader',
	options: {
		loader: 'tsx',
		target: 'es2015'
	}
}