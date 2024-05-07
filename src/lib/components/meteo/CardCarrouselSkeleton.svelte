<div class="w-full h-fit bg-white rounded-lg mt-2 shadow-inner animate-pulse">
	<div class="flex items-center overflow-hidden">
		{#each Array(6) as _}
			<div class="snap-center shrink-0 w-[192px] max-h-28 min-h-28 p-1 m-2 rounded-lg backdrop-blur-md shadow-md">
				<div class="flex justify-between items-center">
					<div class="flex flex-col gap-4">
						<div>
							<div class="h-6 bg-gray-300 rounded-md mb-1"></div>
							<div class="h-4 bg-gray-300 rounded-md w-3/4"></div>
						</div>
						<div>
							<div class="h-4 bg-gray-300 rounded-md mb-1"></div>
							<div class="h-4 bg-gray-300 rounded-md w-1/2"></div>
						</div>
					</div>
					<div class="flex items-center absolute w-10 h-10 rounded-full shadow-inner top-1 right-1 bg-gray-300">
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
