import Api from "../api/api";

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = '?client_id=' + id + '?client_secret=' + sec ;



const getProfile = async (userName) => {
    const url = 'https://api.github.com/users/' + userName + params; 
    let userData = await Api(url);    
    return userData;
}


const getRepos = async (userName) => {
    const url = 'https://api.github.com/users/' + userName + '/repos' + params; 
    let ReposData = await Api(url);
    
    return ReposData;
}


const getStarCount = (repos) => {
    return repos.reduce((count, repo) => {
        return count + repo.stargazers_count
    },0)
}

const calculateScores = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return (followers * 3) + totalStars;
}

const UserData = async (userName) => {
    console.log(userName)
    const [profile, repos] = await Promise.all([getProfile(userName), getRepos(userName)]);

    console.log(profile,repos);
    return {
        profile,
        score : calculateScores(profile, repos)
    }

}

const sortPlayers = (players) => {
    return players.sort((a,b) => b.score - a.score)

}


export const battle = async (players) => {
    let battleData = await Promise.all(players.map(UserData));
    return sortPlayers(battleData);
}

