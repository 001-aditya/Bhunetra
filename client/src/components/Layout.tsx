import Header from './Header'; import {PrototypeBadge} from './Status'; import {Outlet} from 'react-router-dom';
export default function Layout(){return <><Header/><main id="main"><Outlet/></main><PrototypeBadge/></>}
