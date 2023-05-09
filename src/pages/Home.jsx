import React from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';

import Main from '../components/Section/Main/Main';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Section>
        <Header firstNav={'Serenscape'} secondNav={'Home'} /> {/* put if filter wanna be shown filterShown={true} */}
        <Main />
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
