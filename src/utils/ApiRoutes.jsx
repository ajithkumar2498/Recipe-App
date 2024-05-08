const ApiRoutes = {
    LOGIN:{
        path:"/user/login",
        Authenticate:false
    },
    SignUp:{
        path:"/user/signup",
        Authenticate:false
    },
    LOGOUT:{
        path:"user/logout"
    },
    addrecipe:{
        path:"/recipe/addrecipe"
    },
    updaterecipe:{
        path:"/recipe/updaterecipe/:id"
    },
    getrecipeById:{
        path:"/recipe/:id/recipes"
    },
    deleterecipe:{
        path:"/recipe/deleterecipe/:id"
    },
    getallrecipe:{
        path:"/recipe/all"
    }
}

export default  ApiRoutes