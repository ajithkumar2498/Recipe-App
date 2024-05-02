import { faBowlRice, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Form } from 'formik'
import * as yup from "yup"
import React from 'react'

function AddRecipe() {
  const handleAddRecipe = (values, helpers)=>{
     console.log(values)
     console.log(helpers)
  }
  const InitialValues = {
		Recipename:"",
		Authorname:"",
		AuthorImage:"",
		Ingredients:"",
    RecipeImage:"",
    Procedure:""
	}
	const ValidateSchema = yup.object().shape({
		Recipename: yup.string().required(),
		Authorname: yup.string().required(),
		AuthorImage: yup.string().required(),
		Ingredients: yup.string().required(),
    RecipeImage:yup.string().required(),
    Procedure: yup.string().required()
	})
  return <>
   <div className="container">
    <div className="addrecipe">
     <div className="title"><h3 >Add Your Recipe Here</h3> <FontAwesomeIcon icon={faBowlRice}/> </div>
        <Formik  initialValues={InitialValues} validationSchema={ValidateSchema} onSubmit={handleAddRecipe}>
        {(props)=>{
          console.log(props)
              return( 
                <Form action=""  >
                <div className='fields'><label >Recipe Name :</label> <input type="text" name="Recipename"  onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.Recipename}/>
                {
                  props.errors.Recipename && props.touched.Recipename && (
                    <p className="error">{props.errors.Recipename}</p>
                  )
                }
                </div>
                <div className='fields'><label >Author Name :</label> <input type="text" name="Authorname" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.Authorname}  />
                {
                  props.errors.Authorname && props.touched.Authorname && (
                    <p className="error">{props.errors.Authorname}</p>
                  )
                }</div>
                <div className='fields'><label  htmlFor="file" className="file-upload" > <p>upload Author Image </p></label> <input type="file" className="file" name="AuthorImage" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.AuthorImage}  />
                {props.errors.AuthorImage && props.touched.AuthorImage && (
                    <p className="error">{props.errors.AuthorImage}</p>
                  )}</div>
                <div className='fields'><label >Ingredients :</label> <input type="text" name="Ingrdients"  onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.Ingredients}  /> 
                {
                  props.errors.Ingredients && props.touched.Ingredients && (
                    <p className="error">{props.errors.Ingredients}</p>
                  )
                }</div>
                <div className='fields'><label  htmlFor="file" className="file-upload" > <p>upload Recipe Image </p></label> <input type="file" className="file"  name="RecipeImage"  onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.RecipeImage} />
                {
                  props.errors.RecipeImage && props.touched.RecipeImage && (
                    <p className="error">{props.errors.RecipeImage}</p>
                  )
                }</div>
                <div className='fields'><label >Procedure :</label> <textarea name="Procedure"cols="30" rows="10" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.Procedure} ></textarea>
                {
                  props.errors.Procedure && props.touched.Procedure && (
                    <p className="error">{props.errors.Procedure}</p>
                  )
                }</div>
                    <button className='btn1 add' >Add Recipe <FontAwesomeIcon icon={faPlusSquare}/></button>
            </Form>
               )
            }}
         
        </Formik>
       
    </div>
   </div>
  </>
}

export default AddRecipe