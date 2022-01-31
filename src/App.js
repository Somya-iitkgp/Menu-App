import react,{useState} from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'

function App() {

  const [items,setItems]=useState(data);
  const myset=new Set()
  myset.add('all')
  data.map((dat)=>myset.add(dat.category))
  const a=Array.from(myset);
  const [categories,setCategories]=useState(a); 
  console.log(categories);

  const filterItems=(category)=>{
    if(category==='all'){
      setItems(data);
      return;
    }
    const newItems=data.filter((item)=>
      item.category===category
    )
    setItems(newItems)
  };

  return (
    <div className="container">
      <div className='Title'>
        <h2> Our Menu </h2>
        <div className='underline'></div>
      </div>
      {/* <div> */}
        <Categories filterItems={filterItems} categories={categories} items={items}/>
        <Menu items={items}/>
      {/* </div> */}
    </div>
  );
}

export default App;
