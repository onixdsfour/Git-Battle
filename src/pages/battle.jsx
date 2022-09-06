import {useState} from 'react';
import { Link , useLocation } from 'react-router-dom';
import PlayerInput from '../conmponents/PlayerInput';
import PlayerPreview from '../conmponents/preview';


const Battle = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerOneImage, setPlayerOneImage] = useState(null);
    const [playerTwoImage, setPlayerTwoImage] = useState(null);
    const location = useLocation(); 

    const handleSubmit = (id,userName) => {
        if(id === 'playerOne'){
            setPlayerOne(userName);
            setPlayerOneImage('https://github.com/' + userName + '.png?size=200')
        } else {
            setPlayerTwo(userName);
            setPlayerTwoImage('https://github.com/' + userName + '.png?size=200')
        }
    };

    const handleReset = (id) => {
        if(id === 'playerOne'){
            setPlayerOne('');
            setPlayerOneImage(null)
        } else {
            setPlayerTwo('');
            setPlayerTwoImage(null)
        }
    }

    return (
        <div>
            <div className='row'>
                {!playerOne ?
                    <PlayerInput 
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    /> : 
                    <PlayerPreview 
                        userName={playerOne}
                        img ={playerOneImage}
                    >
                        <button className='reset' 
                            onClick={()=> handleReset('playerOne')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>
                }
                {!playerTwo ?
                    <PlayerInput 
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    /> : 
                    <PlayerPreview 
                        userName={playerTwo}
                        img ={playerTwoImage}
                    >
                        <button className='reset' 
                                onClick={()=> handleReset('playerTwo')}
                        >
                            Reset
                        </button>   
                    </PlayerPreview>
                }
            </div>
                {playerOneImage && playerTwoImage &&
                    <Link 
                        className="button" to={{
                            pathname : location.pathname + '/results',
                            search : `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                        }}
                    >
                        Battle
                    </Link>
                }

        </div>
        
    );
}

export default Battle;

