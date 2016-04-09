const WebpackNotifierPlugin = require('webpack-notifier')

export default function (config, options) {
	config.vue.autoprefixer = false
	if (options._name === 'watch') {
		config.plugins.push(new WebpackNotifierPlugin({
			title: 'TikTok',
			alwaysNotify: true
		}))
	}
}
