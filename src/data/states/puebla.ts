import { Partners } from '../../typings/types';
import { oficinaGolfo } from '../oficinasRegionales/oficinasRegionales';

const golfoPuebla: Partners = {
	...oficinaGolfo,
	state: 'Puebla',
};

export let puebla: Partners[] = [
	{
		...golfoPuebla,
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
	// {
	// 	isOffice: true,
	// 	id: 1,
	// 	isInPage: true,
	// 	office: 'Golfo',
	// 	state: 'Puebla',
	// 	city: 'Puebla',
	// 	inPageName: 'Oficina Regional del Golfo',
	// 	phone: '(222) 134-5729',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: true,
	// 	email: 'or_golfo@microsipgolfo.com',
	// },

	// Partner 2
	{
		id: 2,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Puebla',
		inPageName: 'Casa de Software y Soluciones Confiables SA de CV',
		phone: '(222) 229-0970',
		certificationName: 'Elite',
		certificationLevel: 5,
		certificationAS: true,
		email: 'contac_cs_puebla@hotmail.com',
	},

	// Partner 3
	{
		id: 3,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Tecamachalco-Tehuacán',
		inPageName: 'Sicaf-Soluciones',
		phone: '(249) 116-8323',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'ivonneiam@hotmail.com',
	},

	// Partner 4
	{
		id: 4,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'San Martín Texmelucan',
		inPageName: 'INTEC TI SOLUTIONS',
		phone: '(248) 112-2996',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'contactointecti@gmail.com',
	},

	// Partner 5
	{
		id: 5,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Puebla',
		inPageName: 'Raymundo Espinosa García',
		phone: '(222) 199-1356',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'ventas@solucioneshs.com.mx',
	},

	// Partner 6
	{
		id: 6,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Puebla',
		inPageName: 'Soluciones Administrativas Ef, S.A.S. de C.V.',
		phone: '(222) 388-7665',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'atellez@saef.com.mx',
	},

	// Partner 7
	{
		id: 7,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Puebla',
		inPageName: 'Decapsi',
		phone: '(222) 164-4010',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'contacto@decapsi.mx',
	},
  {
		id: 8,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Puebla',
		inPageName: 'Carlos Domínguez Lozano',
		phone: '(222) 232-2606',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'contacto@net-solution.com.mx',
	},
  {
		id: 9,
		isInPage: true,
		office: 'Golfo',
		state: 'Puebla',
		city: 'Puebla',
		inPageName: 'Francisco Javier Carmona Martínez',
		phone: '',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'javier_carmona@carvill.mx',
	},

	// Partner 8
	// {
	// 	id: 8,
	// 	isInPage: true,
	// 	office: 'Golfo',
	// 	state: 'Puebla',
	// 	city: 'Puebla',
	// 	inPageName: 'Carlos Domínguez Lozano',
	// 	phone: '(222) 232-2606',
	// 	certificationName: 'Bronce',
	// 	certificationLevel: 2,
	// 	certificationAS: true,
	// 	email: 'contacto@net-solution.com.mx',
	// },
];
