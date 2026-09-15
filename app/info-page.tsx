import Link from 'next/link';
import {Header,Footer,Reveal} from './components';

export type InfoPageData={eyebrow:string;title:string;subtitle:string;body:string;image:'aircraft'|'detail';kind:'aircraft'|'design'|'projects'};

export function InfoPage({page}:{page:InfoPageData}){return <><Header/><main id="main"><section className="sub-hero"><img src={`/images/${page.image}.webp`} alt={page.kind==='design'?'SCK aircraft cabin interior':'SCK Aviation black Gulfstream G450'} fetchPriority="high"/><div className="hero-shade"/><div><p className="eyebrow">{page.eyebrow}</p><Reveal><h1>{page.title.split('\n').map((text,index)=><span key={text}>{text}{index===0&&<br/>}</span>)}</h1></Reveal></div></section><section className="section editorial"><p className="eyebrow">ATTITUDE WITH ALTITUDE</p><div><h2>{page.subtitle}</h2><p>{page.body}</p>{page.kind==='aircraft'&&<dl><div><dt>Aircraft</dt><dd>Gulfstream G450</dd></div><div><dt>Registration</dt><dd>OE-LSC</dd></div><div><dt>Design</dt><dd>SCK signature</dd></div></dl>}<Link className="text-link" href="/inquire">{page.kind==='projects'?'Discuss a project':'Begin your inquiry'} <span>↗</span></Link></div></section></main><Footer/></>}
