import { Partners } from '../../typings/types';
import { oficinaBajio } from '../oficinasRegionales/oficinasRegionales';

const bajioAguascalientes: Partners = {
	...oficinaBajio,
	state: 'Aguascalientes',
};

export let aguascalientes: Partners[] = [
	{
		...bajioAguascalientes,
	},

	{
		id: 1,
		isInPage: true,
		office: 'Bajio',
		state: 'Aguascalientes',
		city: 'Aguascalientes',
		inPageName: 'Casa de Software de Aguascalientes',
		phone: '(449) 978-3038',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: 'jj.rodriguez@csags.com.mx',
	},
	{
		id: 2,
		isInPage: true,
		office: 'Bajio',
		state: 'Aguascalientes',
		city: 'Aguascalientes',
		inPageName: 'Renovatio Pyme Aguascalientes',
		phone: '(449) 916-8852',
		certificationName: 'Bronce',
		certificationLevel: 2,
		certificationAS: true,
		email: '',
	},
];
