import React from 'react';

import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import UploadSound from '../components/UploadSound/UploadSound';

const UploadPage = () => {
  return (
    <Section>
      <Header firstNav={'Serenscape'} secondNav={'Upload'} />

      <UploadSound />
    </Section>
  );
};

export default UploadPage;
