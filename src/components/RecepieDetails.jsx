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
      <button className="btn1 " onClick={()=> navigate('/profile')}><FontAwesomeIcon icon={faArrowLeft} className="back-icon"></FontAwesomeIcon></button>
      <div className="recipe-image">
        <img src={recipe} alt="" />
        <div className="chef-image">
        <img src={chef} alt="" />
        <div className="recipe-name">
          Chicken
        </div>
        </div> 
      </div>
       <div className="Procedures">
        <div className="ingredients">
          <span>Ingredients</span>
          <ul className="ingredient">
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus non sequi quaerat molestiae natus quae dolor, minima quibusdam quod optio quos ea fugit similique a explicabo odio, nesciunt reiciendis ipsum.</li>
            <li>hiii</li>
            <li>hiii</li>
            <li>hiii</li>
            <li>hiii</li>
            <li>hiii</li>
            <li>hiii</li>
            <li>hiii</li>
          </ul>
        </div>
        <div className="Instructions">
        <span>Instructions</span>
           <ul className="instruction">
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem illo deserunt quas voluptatibus. Natus dolores, nam officiis corporis qui ratione beatae saepe temporibus ex, eveniet dignissimos cupiditate, eos vel?</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
            <li><FontAwesomeIcon className="fa"icon={faSpoon}/>hii</li>
           </ul>
        </div>
       </div>
    </div>
  </>
}

export default RecepieDetails
