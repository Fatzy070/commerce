import cat2 from '../assets/cat-2.jpeg'
import cat3 from '../assets/cat-3.jpeg'
import cat4 from '../assets/cat-4.jpeg'
import cat5 from '../assets/cat-5.jpeg'
import cat6 from '../assets/cat-6.jpeg'
import product1 from '../assets/product-1.jpeg'
import product2 from '../assets/product-2.jpeg'
import product3 from '../assets/product-3.jpeg'
import product4 from '../assets/product-4.jpeg'
import product5 from '../assets/product-5.jpeg'
import product6 from '../assets/product-6.jpeg'
import product7 from '../assets/product-7.jpeg'
import product8 from '../assets/product-8.jpeg'
import offer1 from '../assets/offer-1.png'
import offer2 from '../assets/offer-2.png'
import vendor1 from '../assets/vendor-1.jpeg'
import vendor2 from '../assets/vendor-2.jpeg'
import vendor3 from '../assets/vendor-3.jpeg'
import vendor4 from '../assets/vendor-4.jpeg'
import vendor5 from '../assets/vendor-5.jpeg'
import vendor6 from '../assets/vendor-6.jpeg'
import vendor7 from '../assets/vendor-7.jpeg'
import vendor8 from '../assets/vendor-8.jpeg'
import { faCheck, faTruckFast , faChevronRight, faEye ,  faArrowRightArrowLeft, faCartShopping, faPhoneVolume , faLocationDot , faEnvelope , faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Data = [
    {
        shop: [
            {id:1 ,  name:'home'},
            {id:2 ,  name:'shop '},
            {id:3 ,  name:'shop detail'},
            {id:3 ,  name:'pages'},
            {id:3 ,  name:'contact'}
        ],
        faq: [
            {id:1 , name:'FAQs |'},
            {id:2 , name:'Help |'},
            {id:3 , name:'Support'}
        ],
        E: 'shopper',
        shirt: [
            {id:1 , name: 'shirts'},
            {id:2 , name:' jean'},
            {id:3 , name: 'swimwear'},
            {id:4 , name: 'sleepwear'},
            {id:5 , name: 'sportwear'},
            {id:6 , name: 'jumpsuits'},
            {id:7 , name: 'blazers'},
            {id:8 , name: 'jackets'},
            {id:9 , name:' shoes'},
        ],
        cate:'categories',
        dres:'dresses',
        men: [
            {id:1  , name:`men's dresses`},
            {id:2  , name:`women's dresses`},
            {id:3  , name:`baby's dresses`}
        ],
        support: [
            { id: 1, name: 'quality product', icon: faCheck },
            { id: 2, name: 'free shipping', icon: faTruckFast },
            { id: 3, name: '14-day return', icon: faArrowRightArrowLeft },
            { id: 4, name: '24/7 support', icon: faPhoneVolume },
        ],
        baby: [
            {id:1 , name:`15 products` , image:product3 , men: `Men's dresses`},
            {id:3 , name:`15 products` , image:cat2 , men:`Women's dresses`},
            {id:2 , name:`15 products` , image:cat3 , men:`Baby's dresses`},
            {id:4 , name:`15 products` , image:cat4 , men:`Accerssories`},
            {id:4 , name:`15 products` , image:cat5 , men:`Bags`},
            {id:4 , name:`15 products` , image:cat6 , men:`Shoes`},
        ],
        spring: {
            image: offer1 , 
            discount: "20% off the order",
            collectionName: "Spring Collection",
            shopText: "Shop Now"
          },     
        springs: {
            image: offer2 ,
            collectionName: "Winter Collection",
          },
          trandy : [
            {id:1 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product1 , view: 'view detail' , cart : 'add to cart'},
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product2 , view: 'view detail' , cart : 'add to cart' },
            {id:3 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product3 , view: 'view detail' , cart : 'add to cart' },
            {id:4 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product4 , view: 'view detail' , cart : 'add to cart' },
            {id:5 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product5 , view: 'view detail' , cart : 'add to cart' },
            {id:6 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product6 , view: 'view detail' , cart : 'add to cart' },
            {id:7 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product7 , view: 'view detail' , cart : 'add to cart' },
            {id:8 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image:product8 , view: 'view detail' , cart : 'add to cart' },
          ]   ,
          lorem:'Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.',
          vendor: [
            {id:1 , image: vendor1},
            {id:1 , image: vendor2},
            {id:1 , image: vendor3},
            {id:1 , image: vendor4},
            {id:1 , image: vendor5},
            {id:1 , image: vendor6},
            {id:1 , image: vendor7},
            {id:1 , image: vendor8},
          ],
          quick:[
            {id:1 , name:'home' , icon:faChevronRight },
            {id:1 , name:'our shop' , icon:faChevronRight },
            {id:1 , name:'shop details' , icon:faChevronRight },
            {id:1 , name:'shopping cart' , icon:faChevronRight },
            {id:1 , name:'check out' , icon:faChevronRight },
            {id:1 , name:'contact us' , icon:faChevronRight },
          ] ,
          lorem1:'Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.',
          newa: [
            {id:1 , name: "123 Street , NEW YORK , USA" , icon:faLocationDot},
            {id:1 , name: "info@example.com" , icon:faCheck},
            {id:1 , name: "+012 345 67890" , icon:faPhone},
          ],
          links:'quick links',
          letter:'news letter',
          site:'Your Site Name.',
          right:'all rights reserved. designed by',
          fatzy:'FATZY..!',
          des:'Distributed by'
    }

]

export default Data
