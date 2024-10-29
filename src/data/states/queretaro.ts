import { Partners } from '../../typings/types';
import { oficinaBajio } from '../oficinasRegionales/oficinasRegionales';

const bajioQueretaro: Partners = {
	...oficinaBajio,
	state: 'Querétaro',
};

export let queretaro: Partners[] = [
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
	{
		...bajioQueretaro,
	},
	{
		id: 1,
		isInPage: true,
		office: 'Bajío',
		state: 'Querétaro',
		city: 'Querétaro',
    inPageName: 'Chimés Stock',
		phone: '(442) 413-7311',
		certificationName: 'Oro',
		certificationLevel: 4,
		certificationAS: true,
		email: '',
	},
  {
    id: 2,
    isInPage: true,
    office: 'Bajío',
    state: 'Querétaro',
    city: 'Querétaro',
    inPageName: 'Soluciones de Pesaje de Occidente',
    phone: '(442) 223-3828',
    certificationName: 'Bronce',
    certificationLevel: 2,
    certificationAS: false,
    email: 'alejandra.rosales@solucionescopesa.com',
  },
];
