import type {Metadata} from 'next';
import {InfoPage,InfoPageData} from '../info-page';
export const metadata:Metadata={title:'Special Projects — SCK Aviation'};
const page:InfoPageData={eyebrow:'PRODUCTIONS / COLLABORATIONS',title:'Within\nthe impossible.',subtitle:'An unmistakable presence. On and off screen.',body:'OE-LSC appears in Mission: Impossible 8. Its cinematic character opens a conversation beyond conventional aviation: international film productions, special projects and selected collaborations. Tell us what you have in mind.',image:'aircraft',kind:'projects'};
export default function ProjectsPage(){return <InfoPage page={page}/>}
