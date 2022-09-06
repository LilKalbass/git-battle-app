import {memo} from "react";

export const SelectedLanguage = memo((props) => {
    const languages = ["All", "Javascript", "Java", "Ruby", "Swift", "Python", "C#", "Kotlin"]
    return(
        <ul className = "languages-list">
            {languages.map((language, index ) => (
                <li
                    className = "languages-list-item"
                    key = {index}
                    style = {props.selectedLanguage === language
                        ? {color: "rgb(255, 165, 0)"}
                        :null
                    }
                    onClick = {() => props.selectLanguageHandler(language)}>
                    {language}
                </li>
            ))}
        </ul>
    );
})