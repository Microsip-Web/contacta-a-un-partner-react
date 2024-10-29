import { Partners } from '../../typings/types';
import { oficinaSureste } from '../oficinasRegionales/oficinasRegionales';

const suresteCampeche: Partners = {
	...oficinaSureste,
	state: 'Campeche',
};

export let campeche: Partners[] = [
	{
		...suresteCampeche,
	},
	{
		id: 1,
		isInPage: true,
		office: 'Sureste',
		state: 'Campeche',
		city: 'Ciudad del Carmen',
		inPageName: 'Expertos ERP',
		phone: '(938) 136-8000',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: '',
	},
];
