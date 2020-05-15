import React from 'react';
import { Provider } from 'react-redux';
// Styles
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
// Components
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';
// Store
import store from '../store';


const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App({ Component, pageProps }) {
  console.log('App rendered')
  return (
    <Layout>
      <Normalize />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </Layout>
  )
}

export default App;