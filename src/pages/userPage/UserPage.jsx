import {useState} from 'react';
import {MainPage} from "../mainPage/MainPage";
import {ErrorPage} from "../errorPage/ErrorPage";


export function UserPage() {

    const [user, setUser] = useState({
        name: '',
        lastname: ""
    });



    function submit(e){
        e.preventDefault();
        console.log('da')
        setUser({
            name: '',
            lastname: ''
        })
    }


    if(user.name.toLowerCase() === 'john' && user.lastname.toLowerCase() === 'johns'){
        return <MainPage name={user.name} lastName={user.lastname}/>
    }

    return (
        <>
        <form onSubmit={submit}>
            <input type='text'  placeholder='name' value={user.name}  onChange={(e) => setUser({...user, name: e.target.value})}/>
            <input type='text'  placeholder='lastname' value={user.lastname}  onChange={(e) => setUser({...user, lastname: e.target.value})}/>
            <button >add</button>
        </form>

            {
                user.name === '' || user.lastname === '' ? <h1>User Page</h1> : <ErrorPage name={user.name} lastName={user.lastname}/>
            }

        </>
    );
}

