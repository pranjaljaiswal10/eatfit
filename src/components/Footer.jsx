import { FaGithubSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () =>{
  return (
    <footer className="bg-gray-400">
    <div  className="h-24 flex justify-around items-center mx-24">
      <div className="detail">
    <p>Developed with &#10084; by Pranjal Jaiswal</p>
    <p>Pranjal Jaiswal&copy; All Right Reserverd</p>
     </div>
      <ul className="flex space-x-4 ">
        <li><a href=""><FaLinkedinIn size={40}/></a></li>
        <li><a href=""><FaTwitter size={40}/></a></li>
        <li><a href=""><FaGithubSquare size={40}/></a></li>
      </ul>
    </div>
    </footer>
  )
}
export default Footer;