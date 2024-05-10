import React, { useEffect,useState } from 'react'
import CustomImages from './CustomImages'
import { useNavigate } from 'react-router-dom'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from "../utils/ApiRoutes.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import UpdateRecipe from './UpdateRecipe.jsx'

function YourRecipe() {
  const navigate = useNavigate()
   const [recipes, setRecipes]=useState([])
   const [userId, setUserId] = useState(null)
   
    useEffect(() => {
      // Retrieve user ID from session storage
      const storedUserId = sessionStorage.getItem('id');
      console.log(storedUserId)
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }, []);
    useEffect(()=>{
      if (userId) {
        const fetchRecipes = async () => {
          try {
            const response = await AxiosService.get(`${ApiRoutes.getrecipeById.path}/${userId}/recipes`);
            console.log(response.data.recipes)
              setRecipes(response.data.recipes);
          } catch (error) {
            console.error('Error fetching recipes:', error);
          }
        };
        fetchRecipes();
     }
     },[userId])
    // const openEditRecipe = ()=>{
    //   navigate('/updaterecepies')
    // }
   const handleDeleteRecipe = async (recipeId)=>{
    try {
      await AxiosService.delete(`${ApiRoutes.deleterecipe.path}/${recipeId}`)
      setRecipes(recipes.filter(recipe => recipe._id !== recipeId))
      toast.success('recipe deleted successfull')
    } catch (error) {
      toast.error(error.message || "internal server error")
    }
   }
   
  return <>
     <div className="your-recipe">
      {recipes.map(recipe => (
             <div className="recipe-card" key={recipe._id}>
             <img src={recipe.recipeimage.url} className="recipe-image" alt="recipe" />
             <div className="recipe-card-info">
              <img className="chef-img" src={recipe.authorimage.url} alt="chef" />
               <p className="recipe-title">{recipe.recipename}</p>
               <p className="recipe-desc">
                {recipe.recipedesc} </p>
                <FontAwesomeIcon icon={faEdit} className='svg' onClick={(_id)=><UpdateRecipe recipe={recipe} key={recipe._id}/>}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className='svg' onClick={()=>handleDeleteRecipe(recipe._id)} ></FontAwesomeIcon>
               <button  className='view-btn' onClick={()=> navigate('/recipecard')}> View Recipe </button>       
             </div>
           </div>
      ) )}
    
 
   
     
     
</div>
  </>
  
}

export default YourRecipe