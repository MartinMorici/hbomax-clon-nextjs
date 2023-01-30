import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useRouter } from 'next/router';

const Login = () => {
    const [registrate, setRegistrate] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const signUp = () => {
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
            router.push('/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const signInGuest = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, 'invitado@gmail.com', 'invitado')
            .then((userCredential) => {
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const registro = (e) => {
        e.preventDefault()
        if (registrate) {
            signUp()
        } else{
            setRegistrate(true)
        }
    }

return (
    <main className='text-white px-20 h-screen flex items-center justify-center '>
        <div className='w-full'>
            <h1 className='text-center text-white text-4xl font-semibold mb-6'>{ !registrate ? 'Iniciar sesión' : 'Registrate'}</h1>
            <form action="" className='flex flex-col p-[60px] max-w-[1200px] mx-auto bg-[#dddddd0f] rounded-xl'>
                <h2 className='mb-3 md:text-lg'>{!registrate ? '¿Tienes una cuenta de HBO Max?' : 'Crea tu cuenta en HBO Max!'}</h2>
                <input className='text-lg mb-4 h-[56px] rounded-md outline-none bg-[#00000033] border-[#ffffff66] border pl-3 focus:border-[white]' type="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
                <input className='text-lg  h-[56px] rounded-md outline-none bg-[#00000033] border-[#ffffff66] border pl-3 focus:border-[white]' type="password" value={password} onChange={(e) => setPassword(e.target.value) }  />
                <div className='mt-10'>
                    { registrate ? null :<button type='submit' className='boton' onClick={signIn}> INICIAR SESIÓN</button>}
                    <button className={`boton ${registrate ? '' : 'ml-5' }`} onClick={registro}> REGISTRATE</button>
                </div>
                <div className='flex items-center justify-center my-3'>
                    <div className=' h-[1px] bg-white w-full'></div><span className='font-semibold px-3 text-xl'>o</span><div className='h-[1px] bg-white w-full'></div>
                </div>
                <button className={`boton mt-3`} onClick={signInGuest}>INGRESA COMO INVITADO</button>


            </form>
        </div>
    </main>
  )
}

export default Login