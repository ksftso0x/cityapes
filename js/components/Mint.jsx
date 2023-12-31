import React from 'react'
import '../css/Mint.css'
import Nft1 from '../assets/nfts/1.png'
import Nft2 from '../assets/nfts/2.png'
import Nft3 from '../assets/nfts/3.png'
import Nft4 from '../assets/nfts/4.png'
import Nft5 from '../assets/nfts/5.png'


function NftDisplay() {

    const [NftNum, setNftNum] = React.useState(0)
    const [isHiding, setIsHiding] = React.useState(false)
    const nfts = [Nft1, Nft2, Nft3, Nft4, Nft5]
    const ANIM_TIME = 1000;
   
    const triggerAnimation = () => {
     if (!isHiding) {
       setIsHiding(true)
       setTimeout(() => {
         setNftNum((NftNum) => (NftNum + 1) % nfts.length)
       }, ANIM_TIME / 2)
       setTimeout(() => {
         setIsHiding(false)
       }
         , ANIM_TIME)
     }
   }
   
   React.useEffect(() => {
     const interval = setInterval(() => {
       triggerAnimation()
     }, 3000);
     return () => clearInterval(interval);
   }, []);
   
   
   
   
   
    return (
     <div className='nft-display'>
       <img src={nfts[NftNum]} alt="Nft1" className={isHiding ? "hide" : ""} />
     </div>
     )
   }
   
   

export default function Mint() {
  return (
    <div className='screen-wide-container' id='main'>
        <div className='side-by-side'> 
        <NftDisplay></NftDisplay>
        <article className='textbox'>
            <h1>Untitled Ape Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod doloribus dignissimos officia quia quas recusandae dolorum illum fuga similique aperiam dolorem in consequuntur aut voluptatum, nobis natus veniam pariatur qui molestias nemo magni? Obcaecati, quas. Quasi sed ducimus sit totam aliquam voluptatibus esse laborum libero, mollitia sequi natus dicta.</p>
            <button className='button'>Mint</button>
        </article>
        </div>
    </div>
  )
}
