import "./CSS/totalStyles.css"

export default function Header({ darkMode, setDarkMode }) {

    return (
        <nav className="py-4 px-1 px-md-5 d-flex justify-content-start align-items-center">
            <button className="bg-transparent border border-0"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill={darkMode ? "white" : "black"} className="bi bi-list cursor-pointer" viewBox="0 0 18 18">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg></button>
            <h1 className={darkMode?"text-white fs-4 px-3":"fs-4 px-3"}>Calendar</h1>
            <p className="m-0 ms-auto">Toggle_btn</p>
        </nav>
    )
}