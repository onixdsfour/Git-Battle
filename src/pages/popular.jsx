import  {useState , useEffect} from 'react';
import GitHubService from '../services/gitHubService';
import SelectedLanguages from '../conmponents/SelectedLanguages';
import Repos from '../conmponents/Repos';
import {ThreeCircles} from  'react-loader-spinner';
import { useSearchParams} from 'react-router-dom';



const Popular = () => {
    
    
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [repos, setRepos] = useState([]);   
    const [loader, setLoader] = useState(false);    
    const [searchParams, setSearchParams] = useSearchParams();    
    
    const languageQuery = searchParams.get('lang') || '' ;    
    
    const useDebounce = (value, delay) => {                
        const [debounceValue, setDebounceValue] = useState(value);    

        useEffect(() => {            
            const DelayTimeOut = setTimeout(()=> setDebounceValue(value), delay);    
            return ()=> {clearTimeout(DelayTimeOut)};

        },[value,delay]);
        
        return debounceValue;
    };

    const debounceLanguage = useDebounce(selectedLanguage,500);   
   
    const SelectedLanguageHandler = (language) => {              
            setSelectedLanguage(language);  
            setSearchParams({lang : language});                              
    };

    useEffect(()=> {        
        (async () => {          
            
            setRepos([]);
            setLoader(true);
            let data = await GitHubService(languageQuery? languageQuery : debounceLanguage);
            setRepos(data);
            if(data.length) setLoader(false);

        }) ();

        return ()=> {console.log(`unmount`)};
    }, [debounceLanguage]);

    

    return (        
        <>            
            <SelectedLanguages 
                SelectedLanguageHandler={SelectedLanguageHandler}
                selectedLanguage={selectedLanguage}
                loader={loader}
                languageQuery={languageQuery ? languageQuery : 'All'}                
            />
            {loader ?                 
                    <div className='loader'>
                        <ThreeCircles color="#d0021b"/>
                    </div>             
             : null} 
            {repos.length ? <Repos repos={repos}/> : null}           
        </>
    );
}

export default Popular;
