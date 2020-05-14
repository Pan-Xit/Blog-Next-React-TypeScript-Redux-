import React from 'react';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';

// Components
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Normalize />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}