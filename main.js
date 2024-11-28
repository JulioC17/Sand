import './style.css'
import login from './componentes/login/login'
import main from './componentes/principal/principal'
import anime from 'animejs'




const registeredUser = localStorage.getItem("usuario")
    if(registeredUser === null) {  //si no hay usuario registrado llama a login() que pinta el login y da una alerta si no escribe nada en los inputs
        login()
    }else if (registeredUser !== null){
        console.log("hola");
        
    }








        

        
        








    





