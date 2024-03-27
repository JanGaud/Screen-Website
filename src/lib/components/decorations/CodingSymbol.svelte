<div>
	<p class="flex gap-3">
		<span>&lt;</span>
		<span>/</span>
		<span>&gt;</span>
	</p>
</div>

<style>
	p {
		text-align: center;
		font-size: 13em;
        font-weight: 900;
		text-transform: uppercase;
		text-shadow:
			1px 1px rgba(0, 0, 0, 0.516),
			2px 2px rgba(0, 0, 0, 0.416),
			3px 3px rgba(0, 0, 0, 0.333),
			4px 4px rgba(0, 0, 0, 0.29),
			5px 5px rgba(0, 0, 0, 0.149),
			6px 6px rgba(0, 0, 0, 0.148),
			7px 7px 5px rgba(0, 0, 0, 0.122);
	}

    
	@media (max-width: 1024px) {
		p {
			font-size: 11em;
		}
	}

	@media (max-width: 768px) {
		p {
			font-size: 8em;
		}
	}

	span {
		cursor: pointer;
		pointer-events: none;
		display: inline-block;
		position: relative;
		transition: all 0.2s ease-in-out
	}

	
</style>
