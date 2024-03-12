//* Layouts
import { HeaderOnly } from '~/components/Layouts';
//* Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import News from '~/pages/News';

//*Public Route
const publicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/news', component: News },
];

//*Private Route (redirect Login Page)
const privateRoute = [];

export { publicRoute, privateRoute };
