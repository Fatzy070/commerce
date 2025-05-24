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
import offer1 from '../assets/offer-1.png'
import offer2 from '../assets/offer-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faTruckFast , faEye , faCartShopping  , faArrowRightArrowLeft , faPhoneVolume} from '@fortawesome/free-solid-svg-icons';


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
            {id:1 , name:'quality product' , icon: faCheck },
            {id:2 , name:'free shipping' , icon: faTruckFast },
            {id:3 , name:'14-day return' , icon: faArrowRightArrowLeft },
            {id:4 , name:'24/7 support' , icon: faPhoneVolume },

        ],
        baby: [
            {id:1 , name:`15 products` , image:product3 , men: `men's dresses`},
            {id:3 , name:`15 products` , image:cat2 , men:`women's dresses`},
            {id:2 , name:`15 products` , image:cat3 , men:`baby's dresses`},
            {id:4 , name:`15 products` , image:cat4 , men:`accerssories`},
            {id:4 , name:`15 products` , image:cat4 , men:`bags`},
            {id:4 , name:`15 products` , image:cat4 , men:`shoes`},
        ],
        spring: {
            image: offer1 , 
            discount: "20% off the order",
            collectionName: "Spring Collection",
            shopText: "Shop Now"
          },     
        springs: {
            image: offer2 ,
            discount: "20% off the order",
            collectionName: "Spring Collection",
            shopText: "Shop Now"
          },
          trandy : [
            {id:1 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product1 },
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product2 },
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product3 },
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product4 },
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product5 },
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product6 },
            {id:2 , color:'colourful stylish shirt' , price: `$123.00` , icon1:faEye , icon2: faCartShopping , image: product7 },
          ]        
    }

]

export default Data
