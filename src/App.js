import { useState } from "react";
function App() {

  
  var [job,setJob] = useState('');
  var [jobs,setJobs] = useState(()=>{
    var prevSavedJob = JSON.parse(localStorage.getItem('jobs'));
    return prevSavedJob;
  } );
  function handleSubmit(){
    if(job !== ''){
      setJob('')
      setJobs(function(prevJobs){
        var newJobs = [...prevJobs,job]
        var JSONjobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs',JSONjobs)
        return newJobs
      })
    }
  }
  function handleDelete(deleteIndex){
    setJobs(function(prevs){
      var oldList = [...prevs]
      var newList = oldList.filter(function(item,index){
        return item !== jobs[deleteIndex]
      })
      localStorage.setItem('jobs',JSON.stringify(newList))
      return newList
    })
  }
  return <div style={{padding : 32}}>
    <input
      value={job}
      onChange={function(e){setJob(e.target.value)}}
    ></input>
    <button onClick={handleSubmit}>Add</button>
    <ul>
      {
        jobs.map(function(job,index){
          return <li key={index}><span>{job}</span><button style={{margin : 10}} onClick={function(){return handleDelete(index)}}>Delete</button></li>
        })
      }
    </ul>
  </div>
}
export default App;
