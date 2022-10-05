import styles from './Contact.module.css'
import ContactImg from '../../assents/home.svg'
import {useState} from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase ,push,ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCsjNECeOSRnluAnnZtj_SFXQZrDVN5NGw",
    authDomain: "pretalab-final-ac8a5.firebaseapp.com",
    projectId: "pretalab-final-ac8a5",
    storageBucket: "pretalab-final-ac8a5.appspot.com",
    messagingSenderId: "45581458114",
    appId: "1:45581458114:web:2916b81947342cdaf5f95b",
    databaseURL:"https://pretalab-final-ac8a5-default-rtdb.firebaseio.com/"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  


function Contact(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputValueNome(event){
        setNome(event.target.value)
        }
      
        function handleInputValueEmail(event){
          setEmail(event.target.value)
         }
      
         function handleInputValueMensagem(event){
          setMensagem(event.target.value)
         }

         function handleCreateMessage(event){
            event.preventDefault()
            const mensagensListRef = ref(database,'mensagens')
            const novaMensagemRef = push(mensagensListRef)
            set(novaMensagemRef,{
            texto: mensagem,
            email: email,
            nome: nome
            
            })
            setMensagem('')
            setNome('')
            setEmail('')
         }


 return(
  <>
   <div className={styles.header}>
   <h1>
     Entre em contato
   </h1>
   <img src={ContactImg}/>
   </div >
 <div className={styles.fromContainer}>
<form  onSubmit = {handleCreateMessage} className={styles.form}>
<input 
onChange = {handleInputValueNome}
className={styles.formInput} 
placeholder = "Digite seu nome"
value = {nome}
/>



<input 
onChange = {handleInputValueEmail}
className={styles.formInput} 
placeholder = "Digite seu email"
value = {email}
/>


<textarea 
onChange = {handleInputValueMensagem}
className={styles.formTextArea}  
placeholder = "Digite sua mensagem"
value = {mensagem}
/>


<button className={styles.formButton}type="submit">Enviar Mensagem</button>

</form>

 </div>
 </>
  )
 }


export default Contact