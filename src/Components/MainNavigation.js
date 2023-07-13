import Header from "./Header"

function MainNavigation (props) {
    return(
        <div>
            <Header/>
            <main>{props.children}</main>
        </div>
    )
}

export default MainNavigation;