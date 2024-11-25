import { Outlet } from "react-router"
import MainMenu from "./MainMenu"

export default function DefaultLayout() {

    return (
        <>

            <header className="d-flex justify-content-between bg-dark text-white p-4">
                <div className="logo fs-2">
                    LOGO
                </div>
                <MainMenu />
            </header>
            <main className="text-center pt-3 vh-100">
                <Outlet />
            </main>
            <footer>
                <div className="bg-dark text-white ps-3 text-center">
                    Copyright 2024
                </div>
            </footer>

        </>
    )

}