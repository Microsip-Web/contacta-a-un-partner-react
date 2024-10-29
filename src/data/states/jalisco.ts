import { Partners } from '../../typings/types';
import { oficinaOccidente } from '../oficinasRegionales/oficinasRegionales';

const occidenteJalisco: Partners = {
	...oficinaOccidente,
	state: 'Jalisco',
};

export let jalisco: Partners[] = [
	{
		...occidenteJalisco,
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
	// 	office: 'Occidente',
	// 	state: 'Jalisco',
	// 	city: 'Guadalajara',
	// 	inPageName: 'Oficina Regional de Occidente',
	// 	phone: '(333) 647-4305',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: false,
	// 	email: 'jorge@microsipoccidente.com.mx',
	// },
	{
		id: 2,
		isInPage: true,
		office: 'Occidente',
		state: 'Jalisco',
		city: 'Zapopan',
		inPageName: 'Valencia Loera SA de CV',
		phone: '(333) 816-1855',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'valencia.daniel@icloud.com',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Occidente',
		state: 'Jalisco',
		city: 'Zapopan',
    inPageName: 'Soluciones de Pesaje Occidente SA de CV',
    phone: '(332) 262-3612',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
    email: 'acaceres@solucionescopesa.com',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Occidente',
		state: 'Jalisco',
		city: 'Zapopan',
		inPageName: 'Tecnologías IOT de Occidente SA de CV',
		phone: '(331) 723-9294',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'esther.flores@teciot.mx',
	},
	{
		id: 5,
		isInPage: true,
		office: 'Occidente',
		state: 'Jalisco',
		city: 'Guadalajara',
    inPageName: 'Tecnoesfera Desarrollos y Soluciones',
		phone: '(33) 3189-7286',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
    email: 'laldazz@hotmail.com',
	},
];
