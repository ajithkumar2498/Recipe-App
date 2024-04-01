import skillImage from "../../public/images/recepies/login.jpg"

function ImproveSkill() {

    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know Nutrition facts",
        "Get cooking tips",
        "Get Ranked"
    ]
  return <>
  <div className="section improve-skills">
              <div className="col img">
               <img src="/images/recepies/image_11.jpg" alt="" />
               </div>
            <div className="col typography">
                <h1 className="title"> Improve Your Culinary Skills</h1>
                {list.map((item,index)=>( 
                 <p className='skill-items' key={index}> {item}</p>
                 ))}
                <button className="btn1">Sign Up now</button>
            </div>

    
        </div> 
  </>
}

export default ImproveSkill