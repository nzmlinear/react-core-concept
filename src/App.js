import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const product=[
    {name:'Photoshop',price:'100'},
    {name:'ilustrator',price:'200'},
    {name:'pdf Reader',price:'50'},
    {name:'Adove XD',price:'free'}
  ]
  const person=[
    {name:'sakib',nayika:'Opu'},
    {name:'manna',nayika:'mousumi'},
    {name:'rubel',nayika:'popi'},
    {name:'iliyas',nayika:'sabana'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react app</p>
        
        <Counter></Counter>
        <User></User>

        {
          product.map(product=><Products product={product}></Products>)
        }
        {
          person.map(person=><Person name={person.name} nayika={person.nayika}></Person>)
        }
        {/* Other way to Dynamic */}
        <Person name='Bappi' nayika='mahi'></Person>
        
        
        
      </header>
    </div>
  );
}

function Counter(){
  const [count,setcount]=useState(10);
  const handleDecrease=()=>{
    const newcount=count-1;
    setcount(newcount);
  }
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={()=>setcount(count+1)}>Increase</button>
    </div>
  )
}

function User(){
  const[users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])

  return ( 
    <div>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props) {
  const personStyle={
    border: '2px solid red',
    margin: '2px',
    padding: '20px'
  }
  return (
  <div style={personStyle}>
    <h1>Nayok: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>)
}


function Products(props){
  const productStyles={
    border: '2px solid red',
    margin: '2px',
    padding: '20px',
    backgroundColor:'white',
    color:'tomato'
  }
  return (
    <div style={productStyles}>
    <h3>Product: {props.product.name}</h3>
    <h5>Price: {props.product.price}</h5>
    <button>Submit</button>
    </div>
  )

}

export default App;
