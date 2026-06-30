import { Partners } from '../../typings/types';
import { oficinaBajio } from '../oficinasRegionales/oficinasRegionales';

const bajioGuanajuato: Partners = {
	...oficinaBajio,
	state: 'Guanajuato',
};

export let guanajuato: Partners[] = [
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
		...bajioGuanajuato,
	},
	{
		id: 1,
		isInPage: true,
		office: 'Bajío',
		state: 'Guanajuato',
		city: 'León',
		inPageName: 'Soe Soluciones',
		phone: '(477) 370-7609',
		certificationName: 'Elite',
		certificationLevel: 5,
		certificationAS: true,
		email: 'ventas@soesoluciones.com',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Bajío',
		state: 'Guanajuato',
		city: 'Celaya',
    inPageName: 'Chimés Stock',
		phone: '(461) 616-0929',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: true,
		email: '',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Bajío',
		state: 'Guanajuato',
		city: 'Irapuato',
		inPageName: 'Arquitectos en Sistemas de Información (ASI)',
		phone: '(462) 114-0136',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: '',
	},
  {
		id: 4,
		isInPage: true,
		office: 'Bajío',
		state: 'Guanajuato',
		city: 'León',
		inPageName: 'MODEUZ',
		phone: '(477) 755-1230',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'contacto@modeuz.mx',
	},
	// {
	// 	isOffice: true,
	// 	id: 4,
	// 	isInPage: true,
	// 	office: 'Bajío',
	// 	state: 'Guanajuato',
	// 	city: 'León',
	// 	inPageName: 'Oficina Regional del Bajío',
	// 	phone: '(477) 699-5568',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: false,
	// 	email: 'mariela@microsip.com',
	// },
];
