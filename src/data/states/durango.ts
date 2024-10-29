import { Partners } from '../../typings/types';
import { corporativo } from '../oficinasRegionales/oficinasRegionales';

const corporativoDurango: Partners = {
	...corporativo[0],
	state: 'Durango',
};

export let durango: Partners[] = [
	// certification level
	/*
  NA = 0
  Afilado = 1
  Bronce = 2
  Plata = 3
  Oro = 4
  Elite = 5
*/

	// add corporativo object to the array creating a copy of it and modifying the state property
	{
		...corporativoDurango,
	},

	// {
	// 	isOffice: true,
	// 	id: 1,
	// 	isInPage: true,
	// 	office: 'Corporativo',
	// 	// state: 'Coahuila' || 'Durango' || 'Chihuahua' || 'Baja California' || 'Baja California Sur' || 'Sonora',
	// 	state: 'Coahuila',
	// 	city: 'Torreón',
	// 	inPageName: 'Microsip',
	// 	phone: '(871) 720-0302',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: true,
	// 	email: 'contacto@microsip.com',
	// },
	{
		id: 1,
		isInPage: true,
		office: 'Corporativo',
		state: 'Durango',
		city: 'Durango',
		inPageName: 'SISAP',
		phone: '(618) 811-4002',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: false,
		email: 'direccion@sisap.com.mx',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Corporativo',
		state: 'Durango',
		city: 'Lerdo',
		inPageName: 'Compugenius SA de CV',
		phone: '(871) 723-2763',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'fmontiel@compugenius.com.mx',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Corporativo',
		state: 'Durango',
		city: 'Lerdo',
		inPageName: 'ASEINFORMATICA / L.I. DAVID RODRIGUEZ AYALA',
		phone: '(871) 149-2329',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'david.rodriguez@aseinformatica.com.mx',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Corporativo',
		state: 'Durango',
		city: 'Gómez Palacio',
		inPageName: 'Soporte Leo',
		phone: '(871) 485-1303',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'soporte.leo@outlook.com',
	},
	{
		id: 5,
		isInPage: true,
		office: 'Corporativo',
		state: 'Durango',
		city: 'Durango',
		inPageName: 'SEYOSISTEMAS',
		phone: '(618) 833-9431',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'sergio_gtz@seyosistemas.com.mx',
	},
];
