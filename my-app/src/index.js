import Navigo from 'navigo';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './pages/New';
// import bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About  from './pages/About';
import ProductPage from './pages/Products';


// khoi tao doi tuong routerx
const router = new Navigo('/',{ linksSelector: 'a'})
async function render (content, id) {
    // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Test</button>';

    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content;
    document.querySelector('#footer').innerHTML = Footer.render();
}
router.on({
    '/': () => render(Home.render()),
    '/about': () => render(About.render()),
    '/news': () => render(News.render()),
    '/products': () => render(ProductPage.render()),

})

router.resolve();



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

