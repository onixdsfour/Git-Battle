
const Repos = (props) => {
    console.log('render repos');
    return (
        <ul className='popular-list'>
            {props.repos.map((repo, index) => (
                <li key={repo.id} className='popular-list-item'>
                    <div className='popular-rank'>#{index+1}</div>
                    <ul className='space-list-items'>
                        <li>
                            <img className='avatar' src={repo.owner.avatar_url} alt="Avatar" />
                        </li>
                        <li>
                            <a href={repo.html_url} target ='_blank'  rel="noopener noreferrer">{repo.name}  </a>
                        </li>
                        <li>
                            {repo.owner.login}
                        </li>
                        <li>
                            {repo.stargazers_count}
                        </li>
                    </ul>
                </li>
            ))}
            
        </ul>
    )
}

export default Repos;