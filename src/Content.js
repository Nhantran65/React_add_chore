import { useEffect, useState, useLayoutEffect , useRef, memo} from 'react'

import Paragraph from './Paragraph';
// 1. memo() -> Higher  Order Component (HOC)
// 2. useCallback() 

// Hooks 
// Higher Order Component
// Props 

function Content( ) {

    
    return(
      <div style={{padding: '10px 32px'}}>
      <Paragraph  />
      </div>)
}
  
  
export default memo(Content);
