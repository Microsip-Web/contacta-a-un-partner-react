import { Partners } from '../../typings/types';
import { oficinaCentro } from '../oficinasRegionales/oficinasRegionales';

const centroHidalgo: Partners = {
	...oficinaCentro,
	state: 'Hidalgo',
};

export let hidalgo: Partners[] = [
	{
		...centroHidalgo,
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
		state: 'Hidalgo',
		city: 'Pachuca de Soto',
    inPageName: 'Mangotec',
		phone: '(771) 713-3336',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'gerardo@aggtecnologia.com',
	},
];
