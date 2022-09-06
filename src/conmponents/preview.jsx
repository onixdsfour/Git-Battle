const PlayerPreview = (props) => (
        
        <div className="column">
           <div >
                <img className="avatar" src={props.img} alt="" />
                <h2 className="username">{props.userName}</h2>                    
            </div>       
            {props.children} 
        </div>
    )

export default PlayerPreview; 