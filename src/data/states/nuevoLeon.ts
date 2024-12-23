import { Partners } from '../../typings/types';
import { oficinaNoreste } from '../oficinasRegionales/oficinasRegionales';

const noresteNuevoLeon: Partners = {
	...oficinaNoreste,
	state: 'Nuevo León',
};

export let nuevoLeon: Partners[] = [
	{
		...noresteNuevoLeon,
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
	// 	office: 'Noreste',
	// 	state: 'Nuevo León',
	// 	city: 'Apodaca',
	// 	inPageName: 'Oficina Noreste',
	// 	phone: '(81) 8286-3500',
	// 	certificationName: 'NA',
	// 	certificationLevel: 0,
	// 	certificationAS: true,
	// 	email: 'info@microsipmty.com',
	// },
	{
		id: 2,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Guadalupe',
		inPageName: 'SAYCOM',
		phone: '(81) 1766-7949',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: true,
		email: 'contacto@saycom.mx',
	},
	{
		id: 3,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Monterrey',
		inPageName: 'CABVAL Consultores',
		phone: '(81) 1496-5480',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: false,
		email: 'acabello@cabval.com.mx',
	},
	{
		id: 4,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Monterrey',
		inPageName: 'Sierra Micro Tecnologia',
    phone: '(81) 1769-0389',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
    email: 'contacto@sierramicro.com.mx',
	},
	{
		id: 5,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Monterrey',
		inPageName: 'Core Consultores',
		phone: '(81) 8881-8793',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: '',
	},
	{
		id: 6,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Monterrey',
		inPageName: 'Sistem',
		phone: '(81) 8311-1363',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: true,
		email: 'julio.tobias@prodigy.net.mx',
	},
	{
		id: 7,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Montemorelos',
		inPageName: 'Kitov',
		phone: '(82) 6688-1834',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: false,
		email: 'alexmonte30@hotmail.com',
	},
	{
		id: 8,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Monterrey',
		inPageName: 'Informática Empresarial Integrada',
		phone: '(81) 8333-0456',
		certificationName: 'Plata',
		certificationLevel: 3,
		certificationAS: true,
		email: 'jsaucedo@informaticaempresarial.mx',
	},

	// Partner with ID 9
	{
		id: 9,
		isInPage: true,
		office: 'Noreste',
		state: 'Nuevo León',
		city: 'Monterrey',
		inPageName: 'Ventajas Operativas',
		phone: '(81) 1880-5743',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'adrian@ventajasoperativas.com',
	},
];
