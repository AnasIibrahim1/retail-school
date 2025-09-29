import './style.css';
import * as motion from "motion/react-client"

export default function Home() {

  return (
<>
<div style={{width: '100%', height: '100%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<motion.ul 
  initial={{ filter: 'blur(1px)', backgroundColor: 'red' }} 
  animate={{ backgroundColor: 'blue' }} 
  transition={{ ease: "easeIn", duration: 2 }}
>
  <li>anas</li>
  <li>anas</li>
  <li>anas</li>
  <li>anas</li>
  <li>anas</li>
  </motion.ul>
</div>
</>
  );
}