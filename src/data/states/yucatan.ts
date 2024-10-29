import { Partners } from '../../typings/types';
import { oficinaSureste } from '../oficinasRegionales/oficinasRegionales';

const suresteYucatan: Partners = {
	...oficinaSureste,
	state: 'Yucatán',
};

export let yucatan: Partners[] = [
	{
		...suresteYucatan,
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
	// {
	// 	isOffice: true,
	// 	id: 1,
	// 	isInPage: true,
	// 	office: 'Sureste',
	// 	state: 'Yucatán',
	// 	city: 'Mérida',
	// 	inPageName: 'Oficina Sureste',
	// 	phone: '(999) 926-3228',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: false,
	// 	email: 'carlos@microsipste.com',
	// },
	{
		id: 2,
		isInPage: true,
		office: 'Sureste',
		state: 'Yucatán',
		city: 'Mérida',
		inPageName: 'Casa de software Mérida',
		phone: '(999) 926-3228',
		certificationName: 'Elite',
		certificationLevel: 5,
		certificationAS: true,
		email: 'pilar@csmerida.com',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Sureste',
		state: 'Yucatán',
		city: 'Mérida',
		inPageName: 'Adoc 365',
		phone: '(999) 944-1162',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'salim@adoc365.mx',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Sureste',
		state: 'Yucatán',
		city: 'Mérida',
		inPageName: 'Experta en Pymes',
		phone: '(999) 242-1451',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'monica@expertaenpymes.com',
	},
];
