// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchApi } from '../redux/todoSlicer/';

// export default function Pav() {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchApi());
//     }, [dispatch]);

//     const { data, isLoading, error } = useSelector((state) => state.todos);

//     const breadpav = data.filter((item) => item.category == "pav");

//     return (
//         <div>
//             <div className="data h-[auto] w-[990px]  bg-[#f4f6fb]">
//                 <div className="singledata h-[auto] w-[100%] flex gap-[4px] flex-wrap ">
//                     {
//                         breadpav.length > 0 ?
//                             breadpav.map((e, i) => {
//                                 return (
//                                     <div className=' w-[182.43px] mt-[1%] mb-[0.5%] ml-[10px] rounded-[12px] bg-white  flex  items-center flex-col flex-wrap  ' key={i}>
//                                         <div className="img h-[140px] w-[140px] border border-white">
//                                             <img src={e.image} alt="" />
//                                         </div>
//                                         <div className='h-[130.6px] w-[182.43px] border border-white pl-[12px] pr-[12px] flex justify-evenly flex-col'>
//                                             <div className="name h-[36px] w-[158.43px] leading-[16.9px] overflow-hidden  font-semibold text-[13.5px] font-sans" ><h1>{e.name}</h1></div>
//                                             <div className='h-[26px] w-[158.43px]  flex justify-start items-center font-sans font-normal text-[12px]'><p>{e.weight}</p></div>
//                                             <div className='h-[32.6px] w-[158.43px] flex justify-between items-center font-semibold text-[12px]'><p>₹ {e.price}</p> <button className='h-[31px] w-[66px] border border-[#318616] bg-[#f7fff9] rounded-[6px] font-sans flex justify-center items-center text-[#318616]'>ADD</button></div>

//                                         </div>
//                                     </div>
//                                 )
//                             })
//                             : (
//                                 <div className='h-[75vh] w-[100%] flex justify-center items-center'>
//                                     <div>
//                                         <center>
//                                             <p className='text-3xl mt-[50px]'>We couldn't find any matches!</p>
//                                             <p className='text-[#919098] mt-[10px]'>Please check the spelling or try searching something else</p>
//                                         </center>
//                                     </div>
//                                 </div>
//                             )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
