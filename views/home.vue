<style>
	.page-home {
		margin-top: 10px;
	}
	.list {
		margin-top: 10px;
	}
	.item {
		padding: 10px 0;
		display: inline-block;
		width: 100%;
		position: relative;
		&:not(:last-child) {
			border-bottom: 1px solid #e2e2e2;
		}
		&:hover {
			& .item-meta {
				visibility: visible;
			}
		}
		& .item-timer {
			float: left;
			background-color: #e2e2e2;
			border: 2px solid #ccc;
			padding: 10px;
			width: 120px;
			font-size: 22px;
		}
		& .item-main {
			padding-left: 160px;
		}
		& .item-title {
			line-height: 1.4;
			font-weight: 400;
			font-size: 18px;
		}
		& .item-description {
			font-size: 13px;
			color: #999;
		}
		& .item-meta {
			font-size: 13px;
			color: #999;
			visibility: hidden;
			& span {
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
	@media screen and (min-width: 768px) {
		.item {
			& .item-timer {
				position: absolute;
				width: auto;
				left: -10px;
				transform: translateX(-100%);
			}
			& .item-main {
				padding-left: 0px;
			}
		}
	}
</style>

<template>
	<div class="page-home">
		<a class="pure-button pure-button-primary" v-link="{path: '/add'}">Add A Tok</a>
		<button @click="exportAsJSON" class="pure-button pure-button-success">Export As JSON</button>
		<div class="list">
			<div class="item" v-for="item in list">
				<div class="item-timer">
					{{ item | timer }} days
				</div>
				<div class="item-main">
					<h2 class="item-title">距离{{ item.title }}已经</h2>
					<div class="item-description">{{ item.description }}</div>
					<div class="item-meta">
						<span class="item-remove" @click="removeItem(item.id)">Remove</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {saveAs} from '../modules/file-saver'
	import {getAll, override} from '../store'

	export default {
		data() {
			return {
				list: getAll().reverse()
			}
		},
		methods: {
			removeItem(id) {
				this.list = this.list.filter(item => item.id !== id)
				override(this.list)
			},
			exportAsJSON() {
				const content = new Blob([JSON.stringify(this.list, null, 2)], {
					type: 'application/json;charset=utf-8'
				})
				saveAs(content, `tiktok-${new Date()}.json`)
			}
		},
		filters: {
			timer(item) {
				const time = new Date(`${item.date} ${item.time}`).getTime()
				const now = Date.now()
				const duration = (now - time) / 1000 / 86400

				return Math.floor(duration)
			}
		}
	}
</script>
