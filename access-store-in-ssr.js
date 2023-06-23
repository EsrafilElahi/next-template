// pages/_app.js
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from '../path/to/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const wrapper = createWrapper(() => store);

export default wrapper.withRedux(MyApp);

// inside page
import { wrapper } from '../path/to/_app';
import { useSelector } from 'react-redux';

const YourPage = () => {
  // Access the Redux store state
  const yourState = useSelector((state) => state.yourState);

  // ...

  return (
    // Render your page component
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  // Access the Redux store state
  const yourState = store.getState().yourState;

  // ...

  return {
    props: {
      yourState,
    },
  };
});

export default YourPage;
