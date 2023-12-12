import "./HeroPass.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";

 export const HeroPass = () => {
        return(
            <div className="pass">
                <h2>POPULAR IN WOMENS</h2>
                <hr/>
                <div className="pass-item">
                    {data_product.map((item,i)=>{
                        return(
                            <Item key={i} 
                              id={item.id}
                              name={item.name}
                              image={item.image}
                              new_price={item.new_price}
                              old_price={item.old_price}  />
                        )
                    })}
                </div>
            </div>
        )
}
