// import Card from './1212/1-jsx/Card'
//import 後打一個C自動引入上方列有開啟的檔案Card
// import JsxValue from './1212/2-jsx/jsxValue'
// import ProductTable from './1212/3-jsx-map/ProductTable'
// import Counter from './1213/9-jsx/Counter'
// import Menu from "./1213/9-jsx/active/Menu"
// import Exam2 from './1213/exam2/Exam2'
// import Parents from './1215/1.p2c/Parents'
// import Counter from './1215/2.counter/Counter'
// import Parent from './1215/3.p2c/Parents'
// import TodoApp from './1216/2.todo/TodoApp'
// import TodoApp from './1219/1.todo-p3/TodoApp'
// import HTML5Form from './1219/2.form/HTML5Form'
// import BirthSelect from './1219/3.birth-select/BirthSelect'
// import HTMLValidForm from './1219/4.form-p2/HTMLValidForm'
// import RefsForm from './1220/1.refs/RefsForm'
// import IdForm from './1220/1.refs/IdForm'
// import RefsForm from './1220/1.refs/RefsForm'
// import Main from './1220/2.lifecycle/Main'
// import User from './1220/3.server-data/User'
// import Demo from './1226/Demo'
// import BS5 from '../.temp/1226/2.react-bs/BS5'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
//引入頁面元件
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'

// 巢狀使用
import Layout from './pages/User/Layout'
import Register from './pages/User/Register'
import Login from './pages/User/Login'

//引入排版用元件
import Menubar from './layout/Menubar'
import Footer from './layout/Footer'
import MyContent from './layout/MyContent'

function App() {
  return (
    <BrowserRouter>
      {/* 所有葉面統一選單(導覽列) */}
      <Menubar />

      <MyContent>
        {/* Start: 這裡的頁面元件會切換 */}
        <Routes>
          {/* 這裡加上index與`path="/"`同意思 */}
          <Route index element={<Home />} />
          {/* 巢狀路由 `/user/xxxx` */}
          <Route path="user" element={<Layout />}>
            <Route index element={<Register />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* End: 這裡的頁面元件會切換 */}
      </MyContent>

      {/* 所有頁面統一頁尾 */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
