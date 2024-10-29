import { Partners } from '../../typings/types';
import { oficinaOccidente } from '../oficinasRegionales/oficinasRegionales';

const occidenteMichoacan: Partners = {
	...oficinaOccidente,
	state: 'Michoacán',
};

export let michoacan: Partners[] = [
	{
		...occidenteMichoacan,
	},
	// certification level
	/*
  NA = 0
  Afilado = 1
  Bronce = 2
  Plata = 3
  Oro = 4
  Elite = 5
  */

	{
		id: 1,
		isInPage: true,
		office: 'Occidente',
		state: 'Michoacán',
		city: 'Zamora',
		inPageName: 'Carlos Mario Suárez Carriedo',
		phone: '(351) 119-4700',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: '',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Occidente',
		state: 'Michoacán',
		city: 'Morelia',
		inPageName: 'ERP Morelia',
		phone: '(443) 449-8651',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'jorge@erpmorelia.com',
	},
];
