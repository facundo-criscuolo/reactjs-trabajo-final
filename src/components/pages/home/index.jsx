import "./styles.css";
import Card from "../../products/card";
import Input from "../../Input";
import Loader from "../../loader";
import Slider from "../../slider";
import { useState, useEffect, useContext } from 'react';
import { useFetch } from "../../../hooks/useFetch";
import { API_URLS } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cart-context";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false); 
  const [productFiltered, setProductFiltered] = useState([]); 

  const {setProducts, products: productsContext, onAddToCart, cart} = useContext(CartContext);

  const { data: products, loadingProducts, errorProducts } = useFetch( API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config ); 
  const { data: categories, loadingCategories, errorCategories } = useFetch( API_URLS.CATEGORIES.url, API_URLS.CATEGORIES.config ); 

  useEffect(() => {
    if(products?.length > 0) {
      setProducts(products);

    }
  }, [products, setProducts])


  const filterBySearch = (query) => {
    let updateProductList = [...products];

    updateProductList = updateProductList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })

    setProductFiltered(updateProductList);
  }

  const onChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterBySearch(value);
  }

  const onFocus = () => {
    setActive(true);
  }

  const onBlur = () => {
    setActive(false);
  }

  const onShowDetails = (id) => {
    navigate(`/products/${id}`);
  }


  const onFilter = (name) => {
    setIsFiltered(true);
    const productsByCategory = products.filter((product => product.category === name));
    setProductFiltered(productsByCategory);
  }


  return (
    <div>
      <div className='contentContainer'>
        
          <div className="categoriesContainer">
                {loadingCategories && <Loader ></Loader>}
                {errorCategories && <h3>{errorCategories}</h3>}
                
                <Slider>
                  <button onClick={() => setIsFiltered(false)} type='button' className="categoryContainer">
                          <p className='categoryName'>All</p>
                  </button>
                {   
                    categories.map((category) => (
                      <button key={category.id} onClick={() => onFilter(category.name)} type='button' className="categoryContainer">
                          <p className='categoryName'>{category.name}</p>
                      </button>
                    ))
                }
                </Slider>
          </div>
    
              <h2 className='headerTitleCard'>Products</h2>
              <div className='inputContainer'>
                      <Input 
                        placeholder='find a product'
                        id='task'
                        required={true}
                        name='Search'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        active={active}
                      />
              </div>
              
              <div className="status-container">
                {loadingProducts && <Loader ></Loader>}
                {errorProducts && <h3>{error}</h3>}
                {search.length > 0 && productFiltered.length === 0 && <h3>Product not found =( </h3>}
              </div>

              <div className='cardContainer'>
                {
                  // search.length > 0 ? (
                    isFiltered ? (
                    productFiltered.map((product) => (
                      <Card {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
                      ))
                    ) : (
                    products.map((product) => (
                      <Card {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
                    ))
                    )
                }

              </div>
              {
                  isFiltered && productFiltered.length === 0 && <h3 className="noProduct">Product not found =(</h3>
                }
        </div>  
    </div>
  )
}

export default Home