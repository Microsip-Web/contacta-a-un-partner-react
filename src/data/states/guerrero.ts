import { Partners } from '../../typings/types';
import { oficinaCentro } from '../oficinasRegionales/oficinasRegionales';

const centroGuerrero: Partners = {
	...oficinaCentro,
	state: 'Guerrero',
};

export let guerrero: Partners[] = [
	{
		...centroGuerrero,
	},
];
