import { memo } from "react";

const SelectedLanguages = 
    memo(
        (props) => {    
            console.log('render SelectedLanguages');    
            const languages = ['All', 'Javascript', 'CSS' , 'Python', 'Java', 'Ruby'];           
        
            return (
                <ul className='languages'>
                    {languages.map((language, index) => (
                        <li 
                            key={index}                    
                            onClick={() => {props.SelectedLanguageHandler(language)}}   
                            style={language === props.languageQuery ? {color : '#d0021b'}: {}}                 
                        >                       
                            {language}                    
                        </li>
                    ))}
            </ul>
            )
        }

, (prevProps, nextProps) => {
    return prevProps.selectedLanguage === nextProps.selectedLanguage;
}
) 

export default SelectedLanguages;


