import React from "react";
import {SelectedLanguage} from "./SelectedLanguage";
import {Repos} from "./Repos";
import {fetchPopularRepos} from "../../utils/api";
// import {Link} from "react-router-dom";

export default class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: "All",
            isLoading: false,
            repos: null
        }
    }

    componentDidMount() {
        this.fetchPopularReposHandler(this.state.selectedLanguage);
    }

    fetchPopularReposHandler = (language) => {
        this.setState({isLoading : true})
        fetchPopularRepos(language)
            .then(data => this.setState({repos : data, isLoading : false}))
            .catch(error => {
                this.setState({isLoading : false})
            });
    }

    selectLang = (language) => {
        this.setState({selectedLanguage: language, repos : null}, () => {
            this.fetchPopularReposHandler(language);
        });
    }

    render() {
        return(
            <>
                <SelectedLanguage
                    selectedLanguage = {this.state.selectedLanguage}
                    selectLanguageHandler = {this.selectLang}
                />
                {this.state.repos ?
                    <Repos
                    data = {this.state.repos}/> :
                    <p className = "loading">Loading...</p>
                }
            </>
        )
    }
}
// const Popular = () => {
//     return <div></div>
// }
// export default Popular;
