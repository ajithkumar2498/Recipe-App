import { faArrowLeft, faSpoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CustomImages from "./CustomImages"
import recipe from "../../public/images/recepies/image_9.jpg"
import chef from "../../public/images/chefs/chef_05.jpeg"
import { useNavigate } from "react-router-dom"

function RecepieDetails({re}) {
  const navigate = useNavigate()
  return <>
    <div className="recipe-container">
      <button className="btn1 " onClick={()=> navigate('/recepies')}><FontAwesomeIcon icon={faArrowLeft} className="back-icon"></FontAwesomeIcon>back</button>
      <div className="recipe-image">
        <img src={recipe} alt="" />
        <div className="chef-image">
        <img src={chef} alt="" />
        </div>
        <div className="recipe-name">
          Chicken
        </div>
      </div>
       <div className="Procedures">
        <div className="ingrdients">
          <li className="ingredient">
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
            <ol>hiii</ol>
          </li>
        </div>
        <div className="Instructions">
           <li className="instruction">
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
            <ol><FontAwesomeIcon icon={faSpoon}/>hii</ol>
           </li>
        </div>
       </div>
    </div>
  </>
}

export default RecepieDetails
