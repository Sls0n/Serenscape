import React from 'react';
import MainSound from './MainSound';

import classes from './MainSoundList.module.scss';
import forest from '../../../../assets/images/forest-min.jpg';
import mountain from '../../../../assets/images/mountain-min.jpg';
import hillForest from '../../../../assets/images/hill-forest-min.jpg';
import valdemaras from '../../../../assets/images/valdemaras-min.jpg';

const MainSoundList = () => {
  return (
    <ul className={classes['main__sounds']}>
      <MainSound src={forest} text={'Forest'} />
      <MainSound src={valdemaras} text={'Awesome valdemaras'} />
      <MainSound src={hillForest} text={'Hill sound'} />
      <MainSound src={mountain} text={'Cold mountain'} />
    </ul>
  );
};

export default MainSoundList;
