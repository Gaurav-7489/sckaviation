import type {Metadata} from 'next';
import {Header,Footer,Inquiry} from '../components';
export const metadata:Metadata={title:'Inquire — SCK Aviation'};
export default function InquirePage(){return <><Header/><main id="main" className="inquire-page"><div><p className="eyebrow">YOUR JOURNEY / YOUR VISION</p><h1>Let’s make<br/><span>an entrance.</span></h1><p>Private travel. Special productions.<br/>Something entirely your own.</p><a className="text-link" href="mailto:charter@sckaviation.com">Prefer email? ↗</a></div><Inquiry/></main><Footer/></>}
