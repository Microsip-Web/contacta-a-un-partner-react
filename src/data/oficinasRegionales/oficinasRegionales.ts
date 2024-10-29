import { Partners } from './../../typings/types';
// import { partners } from '../partners';

// corporativo data

export let corporativo: Partners[] = [
	{
		isOffice: true,
		id: 1,
		isInPage: true,
		office: 'Corporativo',
    state: ['Coahuila', 'Durango', 'Chihuahua', 'Baja California', 'Baja California Sur', 'Sonora'],
		// state: 'Coahuila' || 'Durango' || 'Chihuahua' || 'Baja California' || 'Baja California Sur' || 'Sonora',
		// state: ['Coahuila', 'Durango', 'Chihuahua', 'Baja California', 'Baja California Sur', 'Sonora'],
		city: 'Torreón',
		inPageName: 'Microsip Corporativo',
		phone: '(871) 720-0302',
		certificationName: 'NA',
		certificationLevel: 0,
		certificationAS: false, //it does have AS, but for this case it's not in the page
		email: 'contacto@microsip.com',
	},
];

export let oficinaBajio: Partners = {
	isOffice: true,
	id: 4,
	isInPage: true,
	office: 'Bajío',
  state: ['Guanajuato', 'Aguascalientes', 'Querétaro', 'San Luis Potosí', 'Zacatecas'],
	// state: 'Guanajuato' || 'Aguascalientes' || 'Querétaro' || 'San Luis Potosí' || 'Zacatecas',
	// state: ['Guanajuato', 'Aguascalientes', 'Querétaro', 'San Luis Potosí', 'Zacatecas'],
	city: 'León',
	inPageName: 'Oficina Regional del Bajío',
	phone: '(477) 699-5568',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: false,
  email: 'mariajose.villarreal@microsip.com',
};

export let oficinaCDMX: Partners = {
	isOffice: true,
	id: 2,
	isInPage: true,
	office: 'Ciudad de México',
	state: ['Ciudad de México'],
	// state: 'Ciudad de México',
	city: 'México',
	inPageName: 'Oficina Regional Ciudad de México',
	phone: '(55) 8852-2756',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: false,
	email: 'roberto.cazares@microsip.com',
};

export let oficinaCentro: Partners = {
	isOffice: true,
	id: 1,
	isInPage: true,
	office: 'Centro',
	state: ['Estado de México', 'Guerrero', 'Hidalgo', 'Morelos'],
	// state: 'Estado de México' || 'Guerrero' || 'Hidalgo' || 'Morelos',
	city: 'Benito Juárez',
	inPageName: 'Oficina Regional del Centro',
	phone: '(55) 5530-0042',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: false, //it does have AS, but for this case it's not in the page
	email: 'eduardo@microsipmx.mx',
};

export let oficinaGolfo: Partners = {
	isOffice: true,
	id: 1,
	isInPage: true,
	office: 'Golfo',
	state: ['Puebla', 'Oaxaca', 'Tlaxcala', 'Veracruz'],
	// state: 'Puebla' || 'Oaxaca' || 'Tlaxcala' || 'Veracruz',
	city: 'Puebla',
	inPageName: 'Oficina Regional del Golfo',
	phone: '(222) 134-5729',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: true,
	email: 'or_golfo@microsipgolfo.com',
};

export let oficinaNoreste: Partners = {
	isOffice: true,
	id: 1,
	isInPage: true,
	office: 'Noreste',
	state: ['Nuevo León', 'Tamaulipas'],
	// state: 'Nuevo León' || 'Tamaulipas',
	city: 'Apodaca',
	inPageName: 'Oficina Noreste',
	phone: '(81) 8286-3500',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: true,
	email: 'info@microsipmty.com',
};

export let oficinaOccidente: Partners = {
	isOffice: true,
	id: 1,
	isInPage: true,
	office: 'Occidente',
	state: ['Jalisco', 'Colima', 'Michoacán', 'Nayarit', 'Sinaloa'],
	// state: 'Jalisco' || 'Colima' || 'Michoacán' || 'Nayarit' || 'Sinaloa',
	city: 'Zapopan',
	inPageName: 'Oficina Regional de Occidente',
	phone: '(333) 647-4305',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: false,
	email: 'jorge@microsipoccidente.com.mx',
};

export let oficinaSureste: Partners = {
	isOffice: true,
	id: 1,
	isInPage: true,
	office: 'Sureste',
	state: ['Yucatán', 'Campeche', 'Quintana Roo', 'Tabasco', 'Chiapas'],
	// state: 'Yucatán' || 'Campeche' || 'Quintana Roo' || 'Tabasco' || 'Chiapas',
	city: 'Mérida',
	inPageName: 'Oficina Sureste',
	phone: '(999) 926-3228',
	certificationName: 'NA',
	certificationLevel: 0,
	certificationAS: true,
	email: 'carlos@microsipste.com',
};

export const allOffices = [
	corporativo,
	oficinaBajio,
	oficinaCDMX,
	oficinaCentro,
	oficinaGolfo,
	oficinaNoreste,
	oficinaOccidente,
	oficinaSureste,
];
