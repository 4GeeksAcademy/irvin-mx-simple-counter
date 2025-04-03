import React , {useState, useEffect} from"react"

//Counter styles
const Counter = () => {

    //Component state
    const [counter,setCounter] = useState(['0','0','0','0'])
    const [counterSeconds,setCounterSeconds] = useState(0)

    //React hooks
    useEffect(()=> {
        const id = setInterval(()=>{
           setCounterSeconds(prev => prev +1)
        },1000)

        return ()=>clearInterval(id)
    },[])

     useEffect(()=> {
        setCounter(   counterSeconds.toString().padStart(4, "0").split("") )
             
     },[counterSeconds])

    return (
        <div className="bg-black bg-gradient d-flex justify-content-around align-items-center col-9 p-2 rounded">
            <div><i className="fa-solid fa-clock display-1 text-white"></i></div>
            <div className="text-center border border-2 display-1 fw-semibold  bg-dark bg-gradient col-2 rounded text-white">{counter[0]}</div>
            <div className="text-center border border-2  display-1 fw-semibold  bg-dark bg-gradient col-2 rounded text-white">{counter[1]}</div>
            <div className="text-center border border-2 display-1 fw-semibold  bg-dark bg-gradient col-2 rounded text-white">{counter[2]}</div>
            <div className="text-center border border-2 display-1 fw-semibold bg-dark bg-gradient col-2 rounded text-white">{counter[3]}</div>
            <button  onClick={()=>setCounterSeconds(0)} type="button" className="btn btn-light">Reset</button>
        </div>
    )
}

export default Counter