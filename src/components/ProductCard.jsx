import Container from 'react-bootstrap/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Grid, Pagination, Navigation } from 'swiper/modules';
import  React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCard.css';



function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);    



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };


    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  {/* to contain no of styling make card in centre and make space bet cards
  m=>margin , y=>both top and bottom x=>both left and right , 5=>degree of spacing*/}
    
  return (
   
  <Container className='my-5'>
    <h5 style={{color:'black',fontWeight:'bold',textAlign:'center'}}>All Products</h5>
    <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black; 
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: darkgray; 
          }
        `}
      </style>
    <Swiper
      modules={[Grid,Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      grid={{
        rows:5,
        fill:"row",
      }}
      spaceBetween={30} // المسافة بين العناصر
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 1, // 1  للشاشات الصغيرة الهواتف
        },
        640: {
          slidesPerView: 2, // 1  للشاشات الصغيرة
        },
        768: {
          slidesPerView: 3, // 2  للشاشات المتوسطة
        },
        1024: {
          slidesPerView: 4, // 3  للشاشات الكبيرة
        },
      }}
      style={{ marginTop: '100px' }}
    >
      {/*array.from use to set no of items*/}
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          
          <Card style={{
            display: 'flex',
            width: '200px',
            backgroundColor: 'white',
            borderColor:'transparent',
            
          }}>
            <div >
              <Card.Img variant="top" src={product.image} 
                style={{
                  position:'relative',
                  className:"img",
                  width: '100%',
                  height: '100px',
                  borderRadius: '5px',
                 
                }} alt={product.category} className='card-img' />
              
              </div>

            <Card.Body style={{ margintop:'50px',marginBottom:'50px' ,padding:'10px', width:'200px'}}>
              <h6 style={{ color: 'gray',textAlign:'center' }}>{product.category}</h6>
              <h5 style={{fontWeight:'bold',textAlign:'center'}}>{product.name}</h5>
             <h6 style={{color:'gray',textAlign:'center',fontWeight:'bolder'}}>{product.price}</h6> 
              <div style={{
          
                cursor:'pointer',
                color:'black',
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
              }}>
              <i class="bi bi-file-text"
             > show details </i>
             <i class="bi bi-star">
              add to WishList
             </i>
             <button className='card-button'
             style={{
             backgroundColor:'white',
             borderRadius:'5px',
             fontWeight:'bold'
             }}
             ><i className={"bi bi-cart3"}
                ></i> add to cart</button>
             </div>

             
             
            </Card.Body>
          </Card>

        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
);
}

export default ProductCard;