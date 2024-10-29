import { Partners } from '../../typings/types';
import { oficinaCentro } from '../oficinasRegionales/oficinasRegionales';

const centroMorelos: Partners = {
	...oficinaCentro,
	state: 'Morelos',
};

export let morelos: Partners[] = [
	{
		...centroMorelos,
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
		office: 'Centro',
		state: 'Morelos',
		city: 'Cuernavaca',
		inPageName: 'Delra Consulting',
		phone: '(777) 244-3157',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'Delrazo@delraconsulting.com',
	},
];
