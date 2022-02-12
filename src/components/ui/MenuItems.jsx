import './MenuItems.css';
import './Header'

const MenuItems = ({items}) => {
    
    return ( 

        <div className='m-items'>
            
            {items.map(item => <a href='#'>{item}</a>)}
            
        </div>
    );
}
 
export default MenuItems;