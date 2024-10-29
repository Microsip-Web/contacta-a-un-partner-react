import { Partners } from '../../typings/types';
import { corporativo } from '../oficinasRegionales/oficinasRegionales';

const corporativoBajaCalifornia: Partners = {
	...corporativo[0],
	state: 'Baja California',
};

export let bajaCalifornia: Partners[] = [
	// add corporativo object to the array
	{
		...corporativoBajaCalifornia,
	},
	{
		id: 1,
		isInPage: true,
		office: 'Corporativo',
		state: 'Baja California',
		city: 'Tijuana',
		inPageName: 'Ing. Jesús Felizardo Inzunza Medina',
		phone: '(664) 368-7592',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: '',
	},
];
