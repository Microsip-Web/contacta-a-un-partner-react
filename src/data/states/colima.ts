import { Partners } from '../../typings/types';
import { oficinaOccidente } from '../oficinasRegionales/oficinasRegionales';

const occidenteColima: Partners = {
	...oficinaOccidente,
	state: 'Colima',
};

export let colima: Partners[] = [
	{
		...occidenteColima,
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
		state: 'Colima',
		city: 'Colima',
		inPageName: 'CTI Tecnologías de Información',
		phone: '(312) 165-1229',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: false,
		email: 'carmen.lorenzo@grupoxs.com',
	},
];
