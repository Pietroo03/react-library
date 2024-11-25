import MainMenu from "./MainMenu"

export default function AppHeader() {
    return (

        <header className="d-flex justify-content-between bg-dark text-white p-4">
            <div className="logo fs-2">
                LOGO
            </div>
            <MainMenu />
        </header>
    )
}