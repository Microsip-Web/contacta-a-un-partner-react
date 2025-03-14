import { Partners } from '../../typings/types';
import { oficinaBajio } from '../oficinasRegionales/oficinasRegionales';

const bajioZacatecas: Partners = {
	...oficinaBajio,
	state: 'Zacatecas',
};

export let zacatecas: Partners[] = [
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
    ...bajioZacatecas,
  },
  {
    id: 1,
    isInPage: true,
    office: "Bajío",
    state: "Zacatecas",
    city: "Fresnillo",
    inPageName: "Centro de Computo de Fresnillo",
    phone: "(493) 932-7362",
    certificationName: "Plata",
    certificationLevel: 3,
    certificationAS: true,
    email: "compucen@yahoo.com",
  },
  {
    id: 2,
    isInPage: true,
    office: "Bajío",
    state: "Zacatecas",
    city: "Guadalupe",
    inPageName: "RENOVATIO PYME ZACATECAS",
    phone: "(492) 224-6731",
    certificationName: "Bronce",
    certificationLevel: 2,
    certificationAS: false,
    email: "isaac.martinez@renovatiopyme.com",
  },
];
