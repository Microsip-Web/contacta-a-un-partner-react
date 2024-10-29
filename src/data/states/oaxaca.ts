import { Partners } from '../../typings/types';
import { oficinaGolfo } from '../oficinasRegionales/oficinasRegionales';

const golfoOaxaca: Partners = {
	...oficinaGolfo,
	state: 'Oaxaca',
};

export let oaxaca: Partners[] = [
	{
		...golfoOaxaca,
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
		office: 'Golfo',
		state: 'Oaxaca',
		city: 'Oaxaca',
		inPageName: 'Tecneg Oaxaca SA de CV',
		phone: '(951) 132-4328',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'soporte@tec-neg.com',
	},

	// Partner 2
	{
		id: 2,
		isInPage: true,
		office: 'Golfo',
		state: 'Oaxaca',
		city: 'Oaxaca',
		inPageName: 'Sistemas e Implementaciones SOE SAS',
		phone: '(951) 327-0767',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: false,
		email: 'Contacto@soesoluciones.com',
	},
];
