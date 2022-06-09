import Navigo from 'navigo';
import News from './pages/New';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About  from './pages/About';
import ProductPage from './pages/Products';
import ProductDetail from './pages/product-detail';
import Dashboard from './components/Dashboard';
import ProductList from './pages/admin/products/productsList';
import ProductAdd from './pages/admin/products/addProduct';
import ProductUpdate from './pages/admin/products/editProduct';
import UserList from './pages/admin/users/listUsers';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ListStudent from './pages/students';
import DetailStudent from './pages/studentDetail';
import StudentManager from './pages/student-manager';
import StudentAdd from './pages/add_student';
import StudentUpdate from './pages/editStudents';

// khoi tao doi tuong routerx
const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};
// async function render (content, id) {
//     // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>';

//     document.querySelector('#header').innerHTML = Header.render();
//     document.querySelector('#content').innerHTML = await content;
//     document.querySelector('#footer').innerHTML = Footer.render();
// }
// router.on({
//     '/': () => print(Home),
//     '/about': () => print(About),
//     '/news': () => print(News),
//     '/products': () => print(ProductPage),
//     '/products/:id': ({data}) => print(ProductDetail, data.id),
//     '/admin':() =>print(Dashboard),
//     '/admin/products': () => print(ProductList),
//     '/admin/products/add':()=>print(ProductAdd),
//     '/admin/products/:id/edit':({data}) => print(ProductUpdate, data.id),
//     '/admin/users':()=> print(UserList),
//     '/signin':()=> print(SignIn),
//     '/signup':()=> print(SignUp)

// })
// router.on("/admin/*", () =>{}, {
//     before(done, match){
//       if(localStorage.getItem('user')){
//         if(JSON.parse(localStorage.getItem('user')).role == 1){
//           done()
//         }else{
//           print(notFound)
//         }
//       }else{
//         print(notFound)
//       }
//     }
// })

router.on({
    "/": () =>{print(Home)},
    
    "/products": () =>{
      print(ProductPage)
    },
    "/products/:id": ({data}) =>{
      print(ProductDetail, data.id)
    },
    "/news/": ()=>{
      print(News)
    },
    "/students":()=>{
      print(ListStudent)
    },
    "/students/:id": ({data}) =>{
      print(DetailStudent, data.id)
    },
    "/admin/students":()=>{
      print(StudentManager)
    },
    "/admin/students/add":()=>{
      print(StudentAdd)
    },
    "/admin/students/:id/edit": ({data}) =>{
      print(StudentUpdate, data.id)
    },
    "/signin": () =>{
      print(SignIn)
    },
    "/signup": () =>{
      print(SignUp)
    },
    "/about":()=>{
        print(About)
    },
  
    // admin
    "/admin": () =>{
      print(Dashboard)
    },
    "/admin/products": () =>{
      print(ProductList)
    },
    "/admin/products/add": () =>{
      print(ProductAdd)
    },
    "/admin/products/:id/edit": ({data}) =>{
      print(ProductUpdate, data.id)
    },
    '/admin/users':()=>{
        print(UserList)
    }
  
  })
  
  // router.notFound(() =>{print (notFound)})
  router.resolve()




// arrow function: const ten_ham = () => {};
// const arrowRender = async (content,id) => {
//     document.querySelector('#header').innerHTML = '<div>Header</div>';
//     document.querySelector('#content').innerHTML = '<div>Content</div>';
//     document.querySelector('#footer').innerHTML = '<div>Footer</div>';
// };

// function sum(a, b) {
//     return a+b;
// }; // cú pháp thông thường
// const sum1 = (a, b) => {
//     return a+b;
// }; // arrow function có return
// const sum2 = (a, b) => a+b; // nếu chỉ có return

// const display = a => console.log(a); // nếu chỉ có 1 tham số

// render();

