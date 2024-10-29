import { Partners } from '../../typings/types';
import { oficinaGolfo } from '../oficinasRegionales/oficinasRegionales';

const golfoTlaxcala: Partners = {
	...oficinaGolfo,
	state: 'Tlaxcala',
};

export let tlaxcala: Partners[] = [
	{
		...golfoTlaxcala,
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
		office: 'Golfo',
		state: 'Tlaxcala',
		city: 'Tlaxcala',
		inPageName: 'INTEC TI SOLUTIONS',
		phone: '(248) 112-2996',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'contactointecti@gmail.com',
	},
];
