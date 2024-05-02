import gsap from 'gsap';

/**
 * @param {any[]} elements
 */
export function animateCards(elements: any[]) {
	elements.forEach((/** @type {gsap.TweenTarget} */ element) => {
		gsap.to(element, {
			opacity: 0,
			scale: 0.8,
			duration: 0.5,
			ease: 'power3.out',
			paused: true
		});

		element.addEventListener('mouseenter', () => {
			gsap.to(element, {
				opacity: 1,
				scale: 1,
				duration: 0.5,
				ease: 'power3.out'
			});
		});

		element.addEventListener('mouseleave', () => {
			gsap.to(element, {
				opacity: 0,
				scale: 0.8,
				duration: 0.5,
				ease: 'power3.out'
			});
		});
	});
}
