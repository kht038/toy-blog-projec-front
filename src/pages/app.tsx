import Header from 'components/header';
import theme from 'assets/styles/theme';
import BlogCardSection from 'components/blog-card-section';

interface AppProps {
  title: string,
  color: string
}

function App(props: AppProps) {
  return (
    <>
      <Header theme={theme} />
      <BlogCardSection theme={theme} />
      <h1 color={props.color}>
        {props.title}
      </h1>
    </>
  );
}

export default App;
