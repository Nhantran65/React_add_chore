import { useEffect, useState, useLayoutEffect , useRef, memo} from 'react'
// 1. memo() -> Higher  Order Component (HOC)
// 2. useCallback() 

// Hooks 
// Higher Order Component
// Props 

function Content({count}) {

    
    return(
      <div style={{padding: '10px 32px'}}>
       <h1>
        Hello anh em F8 {count}
       </h1>
      </div>)
}
  
  
export default memo(Content);
