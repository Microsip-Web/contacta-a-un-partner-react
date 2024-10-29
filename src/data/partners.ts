import { Partners } from '../typings/types';
import { aguascalientes } from './states/aguascalientes';
import { bajaCalifornia } from './states/bajaCalifornia';
import { bajaCaliforniaSur } from './states/bajaCaliforniaSur';
import { campeche } from './states/campeche';
import { chiapas } from './states/chiapas';
import { chihuahua } from './states/chihuahua';
import { cdmx } from './states/cdmx';
import { coahuila } from './states/coahuila';
import { colima } from './states/colima';
import { durango } from './states/durango';
import { estadoDeMexico } from './states/estadoDeMexico';
import { guanajuato } from './states/guanajuato';
import { guerrero } from './states/guerrero';
import { hidalgo } from './states/hidalgo';
import { jalisco } from './states/jalisco';
import { michoacan } from './states/michoacan';
import { morelos } from './states/morelos';
import { nuevoLeon } from './states/nuevoLeon';
import { nayarit } from './states/nayarit';
import { oaxaca } from './states/oaxaca';
import { puebla } from './states/puebla';
import { queretaro } from './states/queretaro';
import { quintanaRoo } from './states/quintanaRoo';
import { sanLuisPotosi } from './states/sanLuisPotosi';
import { sinaloa } from './states/sinaloa';
import { sonora } from './states/sonora';
import { tamauilipas } from './states/tamaulipas';
import { tlaxcala } from './states/tlaxcala';
import { tabasco } from './states/tabasco';
import { veracruz } from './states/veracruz';
import { yucatan } from './states/yucatan';
import { zacatecas } from './states/zacatecas';
// certification level
/*
  NA = 0
  Afilado = 1
  Bronce = 2
  Plata = 3
  Oro = 4
  Elite = 5
*/

export let partners: Partners[] = [
	...aguascalientes,
	...bajaCalifornia,
	...bajaCaliforniaSur,
	...campeche,
	...chiapas,
	...chihuahua,
	...cdmx,
	...coahuila,
	...colima,
	...durango,
	...estadoDeMexico,
	...guanajuato,
	...guerrero,
	...hidalgo,
	...jalisco,
	...michoacan,
	...morelos,
	...nuevoLeon,
	...nayarit,
	...oaxaca,
	...puebla,
	...queretaro,
	...quintanaRoo,
	...sanLuisPotosi,
	...sinaloa,
	...sonora,
	...tamauilipas,
	...tlaxcala,
	...tabasco,
	...veracruz,
	...yucatan,
	...zacatecas,
];
