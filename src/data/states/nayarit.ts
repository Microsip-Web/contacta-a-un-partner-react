import { Partners } from '../../typings/types';
import { oficinaOccidente } from '../oficinasRegionales/oficinasRegionales';

const occidenteNayarit: Partners = {
	...oficinaOccidente,
	state: 'Nayarit',
};

export let nayarit: Partners[] = [
	{
		...occidenteNayarit,
	},
  // {
  //   id: 1,
  //   isInPage: true,
  //   office: 'Occidente',
  //   state: 'Nayarit',
  //   city: 'Tepic',
  //   inPageName: 'Sistemas e Implementaciones SOE, S.A. de C.V.',
  //   phone: '(951) 197-9472',
  //   certificationName: 'Oro',
  //   certificationLevel: 4,
  //   certificationAS: true,
  //   email: 'jpaez@soesoluciones.com',
  // },
];
