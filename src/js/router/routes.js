import Login from '../../components/Login'
import Foo from '../../components/Foo'
import Bar from '../../components/Bar'
import Register from '../../components/Register'
import HomeTemplate from '../../components/HomeTemplate'
import CourseList from '../../components/CourseList'
// import OrderList from '../../components/OrderList'
import Course from '../../components/Course'
import OrderList from '../../components/CourseList'

export default[
    {path:'/',component: Login},
    {path:'/login',component:Login},
    {path:'/foo', component:Foo},
    {path:'/bar', component:Bar},
    {path: '/register', component:Register},
    { path: '/home', component: HomeTemplate,
    children: [
      { path: 'course/list', component: CourseList },
      {path: 'order/list', component: OrderList},
    //   { path: 'order/list', component: OrderList },
      { path: 'course/:courseNo', component: Course }
    ]
  },

]