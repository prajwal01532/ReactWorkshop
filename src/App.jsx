
import { useState, useEffect } from "react";
//child component
function Childp(props) {
  return (
    <div>
      <h1><br/>
        Hello {props.name}.You are {props.gender}
      </h1>
    </div>
  );
}

//State in react
function Counter() {
  const [count, setCount] = useState(0);
  const [next_var, setNextVar] = useState(0);

  //React useEffect Hook
  useEffect(() => {
    console.log("Counter Mounted");
  }, [next_var]);

  function chNext() {
    setNextVar(next_var + 1);
  }

  //to increase
  function click() {
    setCount(count + 1);
    console.log(count);
  }
  //To decrease
  function click1() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div> <br/>
      <button
        className="bg-green-500 p-2 rounded-xl "
        onClick={click}
        onMouseEnter={
          //Anonumus Mouse Function(WithOut Name)
          () => console.log("Mouse Entered")
        }
      >
       Increase count
      </button> <br/> <br/>

      <h1>The count value is:{count}</h1> <br/>
      <button className="bg-pink-500 p-2 rounded-xl " onClick={click1}>
        Decrease count
      </button><br/> <br/>
      <button className="bg-green-500 p-2 rounded-xl " onClick={chNext}>
        NextVarCount: {next_var}
      </button>
    </div>
  )
}

//Mero form function
function Meroform(){
  const [firstname,setfirstname]=useState()
const [premiumuser,setpremiumuser]=useState(false)



return(
  <div><br/>

    <h1 className="text-red-800 bg-blue-400"><u>This is my form</u></h1> <br/>
    {
      premiumuser?<h2>Answer:.....You're premium user.....</h2>:<h2>Answer:.....Normal User.....</h2>
    }<br/>
<button className="bg-green-300 border border-green-800" onClick={()=>{
setpremiumuser(!premiumuser)

}}>Click Premium</button><br/>
      <form>
      <br/> Name:<input className=" border border-red-800" id="firstname" type="text" onChange={
      (e)=>{
        console.log("Input Changed",e.target.value)
        setfirstname(e.target.value)
      }
    } />
   <h2>My firstname is :{firstname||'N/A'}</h2>
    </form>
  </div>
)
}

//Creating Function Games 
function Games(){
  const[games,setgames]=useState(["VolleyBall","Basketball","Cricket"]);

  return(
    <div>
      <h1>This displays Games:</h1>
        <h2>List of games:
        
{
  games.map((game,index)=>{
    return <li key={index}> {game}</li>
    
  })
}

 </h2>
        
 {
  games.map((game,index)=>{
    return <Game key={index} title={game}/>
    
  })
}
      
    </div>
  )
}

//Game function child class
function Game(props){
  return(
    <div className="text-xl font-bold p-6  m-2 bg-pink-300 rounded-full text-blue-500">
<h1>{props.title}</h1>
<hr/>

    </div>
  )
}

function App() {
  let name1 = "Prajwal";
  let gender1 = "Male";
  let name2 = "sannosam";
  let gender2 = "Female";
  return (
    <div>
      <div className=" text-center">
      <Home  /><br/>
        <h1>My Name is Prajwal Pokhrel...</h1>
        <p>My name is Prajwal and I study BSc CIST at Shree Yantra College.</p>
        <Childp name={name1} gender={gender1} />
        <Childp name={name2} gender={gender2} />
        <Counter />
        <Meroform/>
        <Games/>
        <div class="flex flex-col md:flex-row bg-green-500 justify-between p-2 ">
<div class="bg-blue-800">Element 1</div>
<div class="bg-blue-800">Element 2</div>
<div class="bg-blue-800">Element 3</div>
<div class="bg-blue-800">Element 3</div>
</div>
      </div>
      
    </div>
  );
}

export default App;
