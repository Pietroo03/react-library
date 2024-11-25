import { Outlet } from "react-router"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function DefaultLayout() {

    return (
        <>
            <AppHeader />
            <main className="text-center pt-3 vh-100">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )

}