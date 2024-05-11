import React from 'react'
import { faArrowLeft, faSpoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import toast from "react-hot-toast";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ClipLoader } from 'react-spinners';

function RecipeSteps() {
    const [recipe, setRecipe]=useState(null)
    const auth = sessionStorage.getItem("token")
    const [loader,setLoader]=useState(true)
    const {id} = useParams()
    useEffect(()=>{
        setTimeout(()=>{
          const fetchRecipe = async () => {
            try {
              const response = await AxiosService.get(`${ApiRoutes.getRecipeById.path}/${id}/rp`)
              if(response.status===200){
                setLoader(false)
                setRecipe(response.data.recipe);
                const ingredients = response.data.recipe.ingredients
                toast.success(`${response.data.recipe.recipename} recipe is here`, {icon:"🍛"})
              }else{
                throw new Error("Unexpected response from server");
              }
            } catch (error) {
              console.error('Error fetching recipe:', error);
            }
          };
          
        fetchRecipe();
        },5000)
      },[id])
      const navigate = useNavigate()
  return <>
   <div className="recipe-container">
      <button className="btn1 " onClick={()=> auth ? navigate('/yourrecipe') : navigate('/recipies')}><FontAwesomeIcon icon={faArrowLeft} className="back-icon"></FontAwesomeIcon></button>
      {loader ?  <div className="loader" style={{textAlign:'center'}}> 
      <ClipLoader loading={loader} size={80} aria-label="Loading Spinner" height={80} data-testid="loader" />
      </div> : recipe ?    <>
       <div className="recipe-image">
        <img src={recipe.recipeimage.url} alt="" />
        <div className="chef-image">
        <img src={recipe.authorimage.url} alt="" />
        <div className="recipe-name">
          {recipe.recipename}
        </div>
        </div> 
      </div>
       <div className="Procedures">
        <div className="ingredients">
          <span>Ingredients</span>
          <ul className="ingredient">
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/> {recipe.ingredients}</li>
            {/* <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>hiii</li>
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>vhiii</li>
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>hiii</li>
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>hiii</li>
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>hiii</li>
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>hiii</li>
            <li> <FontAwesomeIcon className="fa"icon={faSpoon}/>hiii</li> */}
          </ul>
        </div>
        <div className="Instructions">
        <span>Instructions</span>
           <ul className="instruction">
            <li>{recipe.procedure}</li>
            {/* <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li>
            <li>hii</li> */}
           </ul>
        </div>
         <div className="createdby">
            <p>Created By</p>
         <p className="recipeby">- {recipe.authorname}</p>
         </div>
         
       </div>
      </> : <></>}
   
     
    </div>
  </>
}

export default RecipeSteps