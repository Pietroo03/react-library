export default function Home() {
    return (
        <>
            <header className="d-flex justify-content-between bg-dark text-white p-4">
                <div className="logo">
                    LOGO
                </div>
                <nav className="">
                    <a href="/">Home</a>
                    <a href="/books">Books</a>
                    <a href="/about">About</a>
                    <a href="/contacts">Contacts</a>
                </nav>
            </header>
            <main className="text-center pt-3 vh-100">
                <h1>Home Page</h1>
            </main>
            <footer>
                <div className="bg-dark text-white ps-3 text-center">
                    Copyright 2024
                </div>
            </footer>

        </>

    )
}