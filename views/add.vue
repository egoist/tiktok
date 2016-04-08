<style>
	.pure-controls {
		margin-top: 10px;
	}
</style>

<template>
	<div class="page-add">
		<form class="pure-form pure-form-stacked" @submit.prevent="handleSubmit">
			<fieldset>
				<label for="title">Title</label>
				<input id="title" type="text" class="pure-input-1" v-model="item.title">

				<label for="description">Description</label>
				<textarea id="description" rows="3" class="pure-input-1" v-model="item.description"></textarea>

				<div class="pure-g">
					<div class="pure-u-1-2">
						<label for="date">Date</label>
						<input id="date" type="date" class="pure-u-23-24" v-model="item.date">
					</div>
					<div class="pure-u-1-2">
						<label for="time">Time</label>
						<input id="time" type="time" class="pure-u-23-24" v-model="item.time">
					</div>
				</div>

				<div class="error" v-if="error">{{ error }}</div>

				<div class="pure-controls">
					<button type="submit" class="pure-u-1-3 pure-button pure-button-primary button-large">Add</button>
				</div>

			</fieldset>
		</form>
		<div class="about">
			<h2 class="title">What is a <code>Tik Tok</code>?</h2>
			<div class="content">
				A <code>Tik Tok</code> is the time since you last did something.
				<hr>
				一个 <code>Tik Tok</code> 是距离你上次做一件事经历的时间。
			</div>
		</div>
	</div>
</template>

<script>
	import randomString from 'random-string'
	import {addItem} from '../store'

	function hasEmptyField(obj) {
		for (const key in obj) {
			if (!obj[key]) {
				return true
			}
		}
		return false
	}

	export default {
		data() {
			return {
				error: '',
				item: {
					title: '',
					description: '',
					date: '',
					time: ''
				}
			}
		},
		methods: {
			handleSubmit() {
				// TODO: more advanced object validation
				if (hasEmptyField(this.item)) {
					this.error = 'Form data is not complete!'
					return
				}
				const item = {
					...this.item,
					id: randomString(5)
				}
				addItem(item)
				this.$route.router.go('/')
			}
		}
	}
</script>
