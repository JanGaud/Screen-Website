<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Spotlight from './Spotlight.svelte';

	export let message = '';

	let typedMessage = '';
	const minTypingSpeed = 30;
	const maxTypingSpeed = 150;
	const showCheckmark = writable(false);

	function typeMessage() {
		if (message === null) {
			return;
		}

		let index = 0;
		function typeNextChar() {
			if (index < message.length) {
				typedMessage += message[index];
				index++;
				setTimeout(
					typeNextChar,
					Math.random() * (maxTypingSpeed - minTypingSpeed) + minTypingSpeed
				);
			} else {
				showCheckmark.set(true);
			}
		}
		typeNextChar();
	}

	onMount(() => {
		if (message !== null) {
			typeMessage();
		} else {
			console.error('Failed to type message because it is null.');
		}
	});
</script>

<div class="h-full flex justify-center items-center px-16">
	<Spotlight width="400px" position="top-28 left-32" rgb="244, 93, 1" pulsate={true} />
	<div class="h-[300px] w-full flex flex-col gap-8 items-center justify-center">
		<div class="h-1/3">
			<p class="text-3xl text-center font-bold tracking-wider text-davys_gray-700 break-words">
				{typedMessage}
			</p>
		</div>
		<div class="h-2/3">
			{#if $showCheckmark}
				<div class="success-animation">
					<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
						<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
						<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
					</svg>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.checkmark {
		width: 125px;
		height: 125px;
		border-radius: 50%;
		display: block;
		stroke-width: 2;
		stroke: #97cc04;
		stroke-miterlimit: 10;
		box-shadow: inset 0px 0px 0px #97cc04;
		animation:
			fill 0.4s ease-in-out 0.4s forwards,
			scale 0.3s ease-in-out 0.9s both;
		position: relative;
		top: 5px;
		right: 5px;
		margin: 0 auto;
	}
	.checkmark__circle {
		stroke-dasharray: 166;
		stroke-dashoffset: 166;
		stroke-width: 3;
		stroke-miterlimit: 10;
		stroke: #97cc04;
		fill: #0e0e0e;
		animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
	}

	.checkmark__check {
		transform-origin: 50% 50%;
		stroke-dasharray: 48;
		stroke-dashoffset: 48;
		animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
	}

	@keyframes stroke {
		100% {
			stroke-dashoffset: 0;
		}
	}

	@keyframes scale {
		0%,
		100% {
			transform: none;
		}

		50% {
			transform: scale3d(1.1, 1.1, 1);
		}
	}

	@keyframes fill {
		100% {
			box-shadow: inset 0px 0px 0px 30px #4bb71b;
		}
	}
</style>
