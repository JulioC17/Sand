import './style.css'
import login from './componentes/login/login'
import main from './componentes/principal/principal'
import timeup from './componentes/timeup/timeup'




const registeredUser = localStorage.getItem("usuario")
const tempTime = localStorage.getItem("tempTime")

    if(registeredUser === null) {  //si no hay usuario registrado llama a login() que pinta el login y da una alerta si no escribe nada en los inputs o almacena los datos del ususario
        login()
    }else if (registeredUser.length > 0 && tempTime === null){ //si el susuario esta registrado pero sin fichar carga la pagina principal de la app
        main()
    }else if (registeredUser.length > 0 && tempTime.length > 0){
        //aqui evaluamos si es que hay un usuario ya registrado y ha fichado, como el navegador tiende a reiniciar las paginas que estan inactivas durante un tiempo, entonces lanzamos esta funcion que obtendra todos los datos anteriores cuando en su momento el usuario ficho, y nos pinta el tiempo transcurrido desd entonces, no importa que se haya cerrado el navegador.
        timeup()
    }








        

        
        








    





