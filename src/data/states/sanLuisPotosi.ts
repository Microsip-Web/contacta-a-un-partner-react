import { Partners } from '../../typings/types';
import { oficinaBajio } from '../oficinasRegionales/oficinasRegionales';

const bajioSanLuisPotosi: Partners = {
	...oficinaBajio,
	state: 'San Luis Potosí',
};

export let sanLuisPotosi: Partners[] = [
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
		...bajioSanLuisPotosi,
	},
	// Partner 1
	{
		id: 1,
		isInPage: true,
		office: 'Bajío',
		state: 'San Luis Potosí',
		city: 'San Luis Potosí',
		inPageName: 'Brenda Karina Mercado Briones',
		phone: '(444) 142-4491',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: false,
		email: 'karyybren@hotmail.com',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Bajío',
		state: 'San Luis Potosí',
		city: 'San Luis Potosí',
		inPageName: 'PROTEK MEXICO',
		phone: '(444) 709-7066',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: false,
		email: 'orfesantos@protekmexico.com.mx',
	},
];
