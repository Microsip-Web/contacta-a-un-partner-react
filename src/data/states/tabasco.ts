import { Partners } from '../../typings/types';
import { oficinaSureste } from '../oficinasRegionales/oficinasRegionales';

const suresteTabasco: Partners = {
	...oficinaSureste,
	state: 'Tabasco',
};

export let tabasco: Partners[] = [
	{
		...suresteTabasco,
	},
];
