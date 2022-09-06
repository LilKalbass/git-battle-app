const PlayerPreview = ({avatar, username, children}) => (
    <>
        <div className = "column">
            <img className = "avatar" src = {avatar} alt = "playerOneImage"/>
            <h2 className = "username">@{username}</h2>
            {children}
        </div>
    </>
)

export default PlayerPreview;