import Login from '../../components/Login'
import Foo from '../../components/Foo'
import Bar from '../../components/Bar'
import Register from '../../components/Register'
export default[
    {path:'/',component: Login},
    {path:'/login',component:Login},
    {path:'/foo', component:Foo},
    {path:'/bar', component:Bar},
    {path: '/register', component:Register}

]