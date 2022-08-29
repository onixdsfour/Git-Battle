import Api from "../api/api";


const GitHubService = async (language) => {
    const url = 'https://api.github.com/search/repositories?q=stars:>1+language:' 
                    + language + '&sort=stars&order=desc&type=Repositories';   
    let fullData = await Api(url);
    let data = fullData.items;
    return data;
}

export default GitHubService;

