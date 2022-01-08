// import React, {useState} from 'react'
// import Serviceapi from '../API/Serviceapi'
// const Services = () => {

//     const [ servicedata , setservicedat] = useState(Serviceapi)
//     console.log(servicedata)
//     return (
//         <div>
//             <section className="ser-mcon">
//                 <div className="ser-con">
//                     <h1 className="main-heading text-center fw-bold">
//                         How to register
//                     </h1>

//                     <div className="row">
//                     {
//                         servicedata.map((currentelement)=>{
//                             const { id , logo , title , info} = currentelement
//                             return (
//                                 <>
//                             <div className="col-11 col-lg-4 col-xxl-4 sub-div"key={id}>
//                             <i className={`fontawesome-style ${logo}`}></i>
//                             <h2 className="sub-heading">{title}</h2>
//                             <p className="main-para">
//                             {info}
//                             </p>
//                            </div>
//                                 </>
//                             )

//                         })
//                     }
                    
                        
//                      </div>

//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Services
