import Navigo from "navigo";
import Header from "./src/components/header";
import Categories from "./src/pages/admin/categories/categories";
import CategoryAdd from "./src/pages/admin/categories/categoryAdd";
import CategoryEdit from "./src/pages/admin/categories/categoryEdit";
import Dashboard from "./src/pages/admin/dashboard";
import BookAdd from "./src/pages/admin/products/productAdd";
import ProductEdit from "./src/pages/admin/products/productEdit";
import ProductList from "./src/pages/admin/products/productList";
import UserList from "./src/pages/admin/users/list-users";
import BookCate from "./src/pages/client/bookCate";
import BookDetail from "./src/pages/client/bookDetail";
import BookList from "./src/pages/client/bookList";
import cartPage from "./src/pages/client/cart";

import HomePage from "./src/pages/client/homePage";
import Signin from "./src/pages/client/signIn";
import Signup from "./src/pages/client/signup";

const router = new Navigo("/", {linksSelector: "a", hash: true});
const print = async (content,id)=>{
  document.getElementById("app").innerHTML=await content.render(id);
  if (content.afterRender) content.afterRender(id);
}

router.on({
  "/":()=> {print(HomePage)},
  "/books":()=>{print(BookList)},
  "/books/:id": ({data}) =>{
    print(BookDetail, data.id)
  },
  "/cart":()=> {print(cartPage)},
  "/signin": () =>{
    print(Signin)
  },
  "/signup": () =>{
    print(Signup)
  },
  "/admin":() => {print(Dashboard)},
  "/admin/books": () => {print(ProductList)},
  "/admin/books/:id/edit": ({data}) =>{
    print(ProductEdit, data.id)
  },
  "admin/users":()=>{print(UserList)},
  "/admin/books/add":( )=> {print(BookAdd)},
  "/admin/categories" : ( )=> {print(Categories)},
  "/admin/categories/:id/edit":({data})=>{ print(CategoryEdit, data.id)},
  "/admin/categories/add":( )=> {print(CategoryAdd)},
  "/categorys/:id?_embed=books": ({ data }) => {
    print(BookCate, data.id);
  }
})
router.resolve()