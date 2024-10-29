import { Partners } from '../../typings/types';
import { corporativo } from '../oficinasRegionales/oficinasRegionales';

const corporativoBajaCaliforniaSur: Partners = {
	...corporativo[0],
	state: 'Baja California Sur',
};

export let bajaCaliforniaSur: Partners[] = [
	// add corporativo object to the array
	// ...corporativo,
	{
		...corporativoBajaCaliforniaSur,
	},

	{
		id: 1,
		isInPage: true,
		office: 'Corporativo',
		state: 'Baja California Sur',
		city: 'La Paz',
		inPageName: 'Protek Mexico',
		phone: '(612) 102-8921',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: null,
		email: 'soporte@protekmexico.com.mx',
	},
];
