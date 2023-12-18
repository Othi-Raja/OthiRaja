import React from 'react'
// import Lottie from 'lottie-web'
import { Detector } from 'react-detect-offline'
import { Container} from "react-bootstrap"
import anigif from "./no-wifi.png"
import 'w3-css/w3.css';
const CheckConnection = props =>{
 
  return(
    <>
    <Detector render={({online}) => (
      online? props.children:
     <div>
       <Container className='w3-background'>
 
 <img src={anigif} className='w3-display-middle' alt="error" style={{width:"200px",height:"200px"}} />
  
     </Container>
     </div>
    )}
    />
    </>
  )
}

export default CheckConnection;















// export default function Networkerr() {
//   const container = React.useRef();
//   useEffect(()=>{
//     Lottie.loadAnimation({
//       container:container.current,
//       renderer:'svg'
//       ,loop: false, 
//       autoplay: true,
//        animationData: require('../error/errorani.json')
//     })

//   },[])
//   return (
//     <>
      

        
//     </>
//   )
// }

 
