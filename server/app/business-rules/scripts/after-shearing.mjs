/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { GlideRecord } from '@servicenow/glide';

/**
 * FunctionExport
 * @param {GlideRecord} current 
 * @param {GlideRecord} previous 
 */
export function afterShearing(
    current
) {
    const llama = current.llama.getRefRecord();
	llama.fur_length -= current.shear_length;
	llama.cleanliness += current.shear_length * 0.25;
	if (llama.cleanliness > 100)
		llama.cleanliness = 100;
		
	llama.update();
}