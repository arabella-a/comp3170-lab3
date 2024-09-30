import news_feed from './sample_news_stories.json';
import Stories from './components/Stories';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;
  console.log('Stories array:', stories);

  return (
    <>
      <div className="App">
        <h1 className="title">Random News Feed</h1>
        <Stories articles={stories} />
      </div>
    </>
  );
}

export default App;
