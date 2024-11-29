import './style.css'
import login from './componentes/login/login'
import main from './componentes/principal/principal'




const registeredUser = localStorage.getItem("usuario")
    if(registeredUser === null) {  //si no hay usuario registrado llama a login() que pinta el login y da una alerta si no escribe nada en los inputs o almacena los datos del ususario
        login()
    }else if (registeredUser.length > 0){ //si el susuario esta registrado pero sin fichar carga la pagina principal de la app
        main()
    }








        

        
        








    





