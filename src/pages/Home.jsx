import MainMenu from "../components/MainMenu"

export default function Home() {
    return (
        <>
            <header className="d-flex justify-content-between bg-dark text-white p-4">
                <div className="logo fs-2">
                    LOGO
                </div>
                <MainMenu />
            </header>
            <main className="text-center pt-3 vh-100">
                <h1>Home Page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis quibusdam eligendi porro culpa. Adipisci dolores eligendi nobis animi, unde illum atque deleniti ducimus repudiandae corporis deserunt expedita, perferendis consequuntur?</p>
            </main>
            <footer>
                <div className="bg-dark text-white ps-3 text-center">
                    Copyright 2024
                </div>
            </footer>

        </>

    )
}