<style src="purecss/build/pure.css"></style>
<style>
	body {
		font: 16px/1.7 "lucida grande","lucida sans unicode",lucida,"Helvetica Neue",helvetica,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	}
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 20px 10px;
	}
	h1, h2, h3, h4, h5 {
		margin: 0;
	}
	a {
		color: #333;
		text-decoration: none;
	}
	.footer {
		padding: 20px 0;
		border-top: 1px solid #e2e2e2;
		margin-top: 20px;
	}
	.error {
		padding: 5px 0;
		color: #BF3F3F;
	}
	hr {
		border: none;
		background-color: #ccc;
		height: 1px;
		margin: 10px 0;
	}
	code {
		background-color: #f0f0f0;
		padding: 5px;
		border-radius: 2px;
	}
	.about {
		background-color: #f9f9f9;
		padding: 10px 20px;
		margin-top: 10px;
		font-size: 13px;
		& .title {
			font-weight: 400;
			font-size: 22px;
			margin-bottom: 10px;
		}
	}
</style>
<style src="./css/button"></style>

<template>
	<div class="container">
		<h2 class="site-name">
			<a v-link="{path: '/'}">Tik Tok</a>
		</h2>
		<router-view></router-view>
		<div class="footer">
			&copy; {{ year }} Tik Tok ❤️ By <a href="https://github.com/egoist">EGOIST</a>.
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				year: new Date().getFullYear()
			}
		}
	}
</script>
