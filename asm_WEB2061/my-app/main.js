import Navigo from "navigo";
import BookDetail from "./src/pages/client/bookDetail";
import HomePage from "./src/pages/client/homePage";

const router = new Navigo("/", {linksSelector: "a", hash: true});
const print =async (content, id)=>{
  document.getElementById("app").innerHTML= await content.render(id);
  if (content.afterRender) content.afterRender(id);
};

router.on({
  "/":()=> {print(HomePage)},
  "/books/:id": ({data}) =>{
    print(BookDetail, data.id)
  }
})
router.resolve()