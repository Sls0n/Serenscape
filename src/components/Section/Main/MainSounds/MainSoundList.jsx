import React from 'react';
import MainSound from './MainSound';

import classes from './MainSoundList.module.scss';
import forest from '../../../../assets/images/forest.jpg';
import mountain from '../../../../assets/images/mountain.jpg';
import hillForest from '../../../../assets/images/hill-forest.jpg';
import landscape from '../../../../assets/images/landscape.jpg';
import leafRain from '../../../../assets/images/leaf-rain.jpg';
import storm from '../../../../assets/images/storm.jpg';
import valdemaras from '../../../../assets/images/valdemaras.jpg';
import galaxy from '../../../../assets/images/galaxy.jpg';

const MainSoundList = () => {
  return (
    <ul className={classes['main__sounds']}>
      <MainSound src={galaxy} text={'Galaxy'} />
      <MainSound src={mountain} text={'Mountain'} />
      <MainSound src={hillForest} text={'Hill forest'} />
      <MainSound src={landscape} text={'Landscape'} />
      <MainSound src={leafRain} text={'Leaf Rain'} />
      <MainSound src={storm} text={'Storm'} />
      <MainSound src={valdemaras} text={'Valdemaras'} />
      <MainSound src={forest} text={'Forest'} />
    </ul>
  );
};

export default MainSoundList;
