import { Partners } from '../../typings/types';
import { oficinaOccidente } from '../oficinasRegionales/oficinasRegionales';

const occidenteSinaloa: Partners = {
	...oficinaOccidente,
	state: 'Sinaloa',
};

export let sinaloa: Partners[] = [
	{
		...occidenteSinaloa,
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
		state: 'Sinaloa',
		city: 'Culiacán',
		inPageName: 'Jesús Gerardo Ochoa Cárdenas',
		phone: '(667) 187-0513',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'Gerardo.ochoa@goit.cc',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Occidente',
		state: 'Sinaloa',
		city: 'Mazatlán',
		inPageName: 'Protek Mexico',
		phone: '(669) 129-5359',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: false,
		email: 'soporte@protekmexico.com.mx',
	},
	// {
	// 	id: 3,
	// 	isInPage: true,
	// 	office: 'Occidente',
	// 	state: 'Sinaloa',
	// 	city: 'Mazatlán',
	// 	inPageName: 'Héctor Armando Acosta Flores',
	// 	phone: '(669) 912-0752',
	// 	certificationName: 'Bronce',
	// 	certificationLevel: 2,
	// 	certificationAS: false,
	// 	email: 'todosistemas@prodigy.net.mx',
	// },
	{
		id: 4,
		isInPage: true,
		office: 'Corporativo',
		state: 'Sinaloa',
		city: 'Mazatlán',
		inPageName: 'DANTO SYSTEMS',
		phone: '(627) 522-0140',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: true,
		email: 'alberto@danto.mx',
	},
];
