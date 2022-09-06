import { useState } from "react";

const PlayerInput = (props) => {
    const [userName, setUserName] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();

        props.onSubmit(props.id , userName);
    }

    return (
        <form className="column" onSubmit={handleSubmit}>
            <label htmlFor="username">{props.label}</label>
            <input 
                id='username'
                type="text"
                value={userName} 
                placeholder='Github username'
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
            />
            <button 
                className="button"
                type="submit"
                disabled={!userName.length}
            >                    
                Submit
            </button>
        </form>
        
        
    );
}

export default PlayerInput;
