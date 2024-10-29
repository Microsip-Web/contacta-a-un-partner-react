import { Partners } from '../../typings/types';
import { oficinaSureste } from '../oficinasRegionales/oficinasRegionales';

const suresteQuintanaRoo: Partners = {
	...oficinaSureste,
	state: 'Quintana Roo',
};

export let quintanaRoo: Partners[] = [
	{
		...suresteQuintanaRoo,
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
	// Partner 1
	{
		id: 1,
		isInPage: true,
		office: 'Sureste',
		state: 'Quintana Roo',
		city: 'Cancún',
		inPageName: 'Mayaccess',
		phone: '(998) 884-3130',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'ivanl@mayaccess.com.mx',
	},
];
