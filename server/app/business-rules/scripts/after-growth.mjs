export function afterGrowth(
    current
) {
    const llama = current.llama.getRefRecord();
	llama.weight = current.current_weight;
	llama.fur_length = current.current_fur_length;
	llama.update();
}