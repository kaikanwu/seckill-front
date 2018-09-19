import Login from '../../components/Login'
import Foo from '../../components/Foo'
import Bar from '../../components/Bar'

export default[
    {path:'/',component: Login},
    {path:'/login',component:Login},
    {path:'/foo', component:Foo},
    {path:'/bar', component:Bar}

]