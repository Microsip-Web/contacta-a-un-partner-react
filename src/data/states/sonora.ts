import { Partners } from '../../typings/types';
import { corporativo } from '../oficinasRegionales/oficinasRegionales';

const corporativoSonora: Partners = {
	...corporativo[0],
	state: 'Sonora',
};

export let sonora: Partners[] = [
	// add corporativo object to the array
	{
		...corporativoSonora,
	},
];
