import type {Metadata} from 'next';
import {InfoPage,InfoPageData} from '../info-page';
export const metadata:Metadata={title:'OE-LSC — SCK Aviation'};
const page:InfoPageData={eyebrow:'OE-LSC / THE AIRCRAFT',title:'Presence.\nWithout precedent.',subtitle:'One aircraft. A complete point of view.',body:'The Gulfstream G450 OE-LSC carries the SCK signature through every layer. Matte and glossy exterior finishes introduce a design language that continues throughout the cabin. Discover an aircraft shaped as much by attitude as by aviation.',image:'aircraft',kind:'aircraft'};
export default function AircraftPage(){return <InfoPage page={page}/>}
