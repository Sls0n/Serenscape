import React from 'react';
import MainSound from './MainSound';

import classes from './MainSoundList.module.scss';
import forest from '../../../../assets/images/forest-min.jpg';
import mountain from '../../../../assets/images/mountain-min.jpg';
import hillForest from '../../../../assets/images/hill-forest-min.jpg';
import landscape from '../../../../assets/images/landscape-min.jpg';
import leafRain from '../../../../assets/images/leaf-rain-min.jpg';
import storm from '../../../../assets/images/storm-min.jpg';
import valdemaras from '../../../../assets/images/valdemaras-min.jpg';
import galaxy from '../../../../assets/images/galaxy-min.jpg';

const MainSoundList = () => {
  return (
    <ul className={classes['main__sounds']}>
      <MainSound src={galaxy} text={'Immersive galaxy'} />
      <MainSound src={mountain} text={'Snowy mountain'} />
      <MainSound src={hillForest} text={'Hill forest'} />
      <MainSound src={landscape} text={'Awesome landscape'} />
      <MainSound src={leafRain} text={'Leaf Rain'} />
      <MainSound src={storm} text={'Storm hit'} />
      <MainSound src={valdemaras} text={'Valdemaras'} />
      <MainSound src={forest} text={'Forest birds'} />
    </ul>
  );
};

export default MainSoundList;
