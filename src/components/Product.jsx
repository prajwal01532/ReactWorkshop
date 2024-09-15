import { Link } from "react-router-dom";

const Product = (props) => {
 

  return (
    <div>
        <div className=" m-4 md:bg-green-200 rounded-xl"><img className='h-40 w-full object-contain'src={props.product.thumbnail}/>
        <h1 className="mt-2 font-bold">{props.product.title}</h1>
        <h1 className="mt-2 line-through text-red-500 font-bold">{props.product.price}</h1>
        <h1 className="mt-2 font-bold">{props.product.price}</h1>
      <div className="mt-2 font-bold"> Stock:</div> <h1 className="mt-2 font-bold">{props.product.stock}</h1>
       <Link to={"/products/"+ props.product.id} ><button className="cursor-pointer rounded-xl bg-blue-500 text-black w-full font-bold">View</button></Link>
        </div>

      
      </div>
    
  );
};

export default Product;
