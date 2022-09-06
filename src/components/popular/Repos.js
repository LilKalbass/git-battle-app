import {memo} from "react";

export const Repos = memo((props) =>
    (
        <ul className = "popular-list">
            {props.data.map((repo, index) => (
                <li key = {repo.id} className = "popular-item">
                    <div className = "popular-rank">№{index + 1}</div>
                    <ul className = "space-list">
                        <li>
                            <img className = "avatar" src = {repo.owner.avatar_url} alt = "avatar"/>
                        </li>
                        <li>
                            <a className = "space-list-link" href = {repo.html_url} target = "_blank">{repo.name}</a>
                        </li>
                        <li className = "space-list-nickname">@{repo.owner.login}</li>
                        <li style = {{color: 'gold'}}>{repo.stargazers_count}</li>
                    </ul>
                </li>
            ))}
        </ul>
    )
)