export function afterFeeding(
    current
) {
    const calculateCleanlinessFromFoodWeight = function(foodWeight) {
		return Math.log(foodWeight) * 5;
	};

	const llama = current.llama.getRefRecord();
	
	llama.cleanliness -= calculateCleanlinessFromFoodWeight(current.food_weight);
	if (llama.cleanliness < 0) {
		llama.cleanliness = 0;
	}
	
	llama.update();;
}