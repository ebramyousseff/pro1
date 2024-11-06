import React, { useEffect, useState } from 'react';
import './styleall.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Homepage() {

    const [products , setProducts]= useState([])

    useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(response =>{
    let data = response.data 
    setProducts(data);
})

    },[]);



      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true); // للتحكم بعرض مؤشر التحميل
      const [error, setError] = useState(null); // لتخزين رسالة الخطأ إن وُجدت

      useEffect(() => {
        // Fetching data from API
        fetch("https://fakestoreapi.com/products")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok"); // لو لم تكن الاستجابة جيدة نرمي خطأ
            }
            return res.json();
          })
          .then((data) => {
            setData(data); // تخزين البيانات القادمة من API
            setLoading(false); // إيقاف مؤشر التحميل بعد جلب البيانات
          })
          .catch((error) => {
            setError(error.message); // تخزين رسالة الخطأ
            setLoading(false); // إيقاف مؤشر التحميل
          });
      }, []);

      // أثناء التحميل نعرض مؤشر التحميل
      if (loading) {
        return <div>Loading...</div>;
      }

      // عند حدوث خطأ نعرض رسالة الخطأ
      if (error) {
        return <div>Error: {error}</div>;
      }




    return (
      <>
        <div className=" container-fluid">
          <div className="head">
            <h1>Welcome</h1>
            <h2> All Products </h2>
          </div>

          <div className="row justify-content-center  d-flex">
            {products.map((prodct) => (
              <div className="col-md-4 heghit mt-3">
                <div class="card w-75 m-auto mt-4  border-rounded ">
                  <img
                    src={prodct.image}
                    class="card-img-top w-50 card_img mt-3 m-auto"
                    alt={prodct.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{prodct.title} </h5>
                    <p class="card-text">price:${prodct.price}</p>

                    <h5 class="card-title"> rate {prodct.rating.rate} </h5>
                  </div>
                  <Link className='btn btn-info mt-2 mb-2 w-50 mx-auto' to={`/single/${prodct.id}`} key={prodct.id}>Show Product</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Homepage;