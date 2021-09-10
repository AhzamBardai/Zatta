import React,{ useState } from 'react'
import axios from 'axios'
import userStore  from '../../Users/GetUsers';
import PasswordModal from '../PasswordModal'
import SignupFormInput from './SignupFormInput';

function SignupForm() {

    // data from User Store
    const urlUsers = userStore(state => state.urlUsers)
    const setLogedIn = userStore(state => state.setLoggedIn)
    const setUser = userStore(state => state.setCurrentUser)
    const [modal, setModal] = useState(false)

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(urlUsers, userInfo)
            .then(res => {
                setUser(res.data)
                setLogedIn(true)
                window.sessionStorage.setItem('username', res.data.username)
                window.location.reload()
            })
            .catch(() => {
                setLogedIn(false)
                setModal(true)
            })
        
    }


    return (
        <form className="mt-10" method="POST" onSubmit={handleSubmit} >

            <SignupFormInput userInfo={userInfo} setUserInfo={setUserInfo} />      

            { modal && <PasswordModal modal={modal} setModal={setModal} string={'Username has to be unique'}/> }

        </form>

    )
}

export default SignupForm
