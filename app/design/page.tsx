import type {Metadata} from 'next';
import {InfoPage,InfoPageData} from '../info-page';
export const metadata:Metadata={title:'The SCK Signature — SCK Aviation'};
const page:InfoPageData={eyebrow:'THE SCK SIGNATURE',title:'An obsession.\nIn every detail.',subtitle:'Nothing incidental. Everything considered.',body:'From the interplay of matte and gloss to Portoro marble in the galley, coordinated carpet tones and black Christofle cutlery, every detail belongs to one holistic concept. The G450 interior received recognition at The International Yacht & Aviation Awards in May 2024.',image:'detail',kind:'design'};
export default function DesignPage(){return <InfoPage page={page}/>}
