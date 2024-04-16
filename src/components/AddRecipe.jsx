import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AddRecipe() {
  return <>
   <div className="container">
    <div className="addrecipe">
        <form action="" >
            <label htmlFor="">Recipe Name :</label> <input type="text" name="Recipe" id="" />
            <label htmlFor="">Author Name :</label> <input type="text" name="Author" id="" />
            <label htmlFor="">Recipe Image :</label> <input type="file" name="RecipeImage" id="" />
            <label htmlFor="">Author Image :</label> <input type="file" name="AuthorImage" id="" />
            <label htmlFor="">Ingredients :</label> <input type="text" name="Ingrdients" id="" />
            <label htmlFor="">Procedure :</label> <textarea name="Procedure" id="" cols="30" rows="10"></textarea>
                <button className='btn1 add' onSubmit={()=> handleAddRecipe()}>Add <FontAwesomeIcon icon={faPlusSquare}/></button>
         
        </form>
    </div>
   </div>
  </>
}

export default AddRecipe