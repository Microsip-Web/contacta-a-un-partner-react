import { Partners } from '../../typings/types';
import { oficinaNoreste } from '../oficinasRegionales/oficinasRegionales';

const noresteTamaulipas: Partners = {
	...oficinaNoreste,
	state: 'Tamaulipas',
};

export let tamauilipas: Partners[] = [
	{
		...noresteTamaulipas,
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
		office: 'Noreste',
		state: 'Tamaulipas',
		city: 'Reynosa',
		inPageName: 'Erps Reynosa',
		phone: '(899) 204-4137',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: '',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Noreste',
		state: 'Tamaulipas',
		city: 'Nuevo Laredo',
		inPageName: 'ECLICK Soluciones',
		phone: '(867) 715-1766',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'rvillatoro@eclick.com.mx',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Noreste',
		state: 'Tamaulipas',
		city: 'Matamoros',
		inPageName: 'Digitec',
		phone: '(868) 812-1618',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: '',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Noreste',
		state: 'Tamaulipas',
		city: 'Tampico',
		inPageName: 'SERVINTEC',
		phone: '(833) 216-8578',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'ventas@servintec.com.mx',
	},
];
