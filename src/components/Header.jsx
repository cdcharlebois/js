export default ({ title }) => {
    return (
        <nav>
            <h1>
                <a href="/" className="link-to-home">
                    {title}
                </a>
            </h1>
        </nav>
    );
};
