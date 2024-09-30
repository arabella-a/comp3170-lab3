export default function Stories({ articles }) {
    console.log('Articles passed to Stories:', articles);

    const singleArticle = articles.map((article, index) => (
        <Article key={index} results={article} />
    ));

    return (
        <div className="outer-container">
            {singleArticle}
        </div>
    );

    function Article({ results }) {
        function closeArticle(e) {
            if (e.target === e.currentTarget || e.target.tagName !== 'BUTTON') {
                return;
            }
            e.currentTarget.remove();
        }

        return (
            <div className="exit" onClick={closeArticle}>
                <div className="container">
                    <button>X</button>
                    <div className="img-title">
                        <img 
                            src={results.image_url || 'https://placehold.co/150'} 
                            alt="article thumbnail" 
                        />
                        <div className="title-author">
                            <h1>
                                <a href={results.link} target="_blank" rel="noopener noreferrer">
                                    {results.title}
                                </a>
                            </h1>
                            <p>By: {Array.isArray(results.creator) ? results.creator.join(', ') : 'Unknown Author'}</p>
                        </div>
                    </div>
                    <p>{results.description}</p>
                </div>
            </div>
        );  
    }
}
