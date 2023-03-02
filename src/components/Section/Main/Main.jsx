import React from 'react';

const Main = () => {
  return (
    <main class="main">
      <div class="main__titlebox">
        <div class="main__header">Nature ambience</div>
      </div>
      <div class="main__sounds">
        <div class="main__sound">
          <img class="main__img" src="./pexels-valdemaras-d-1647962.jpg" alt="" />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Valdemaras</div>
          </div>
        </div>

        <div class="main__sound">
          <img
            src="./beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg"
            alt=""
          />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Mountain</div>
          </div>
        </div>
        <div class="main__sound">
          <img src="./pexels-gabriela-palai-395196.jpg" alt="" />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Rain</div>
          </div>
        </div>
        <div class="main__sound">
          <img src="./storm.jpg" alt="" />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Wind</div>
          </div>
        </div>
        <div class="main__sound">
          <img src="./forest.jpg" alt="" />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Forest</div>
          </div>
        </div>
        <div class="main__sound">
          <img src="./pexels-arthouse-studio-4318214.jpg" alt="" />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Woods</div>
          </div>
        </div>
        <div class="main__sound">
          <img src="./daniel-maissan-FovRTy6Alpc-unsplash.jpg" alt="" />
          <div class="box">
            <div class="play">
              <svg class="main__play-svg">
                <use xlink:href="sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="text">Ocean</div>
          </div>
        </div>
      </div>
      <br />

      <div class="main__titlebox">
        <div class="main__header">Piano Loops</div>
      </div>
      <div class="main__sounds">
        <div class="main__sound main__sound-2">
          <img src="./piano.png" alt="" />
        </div>
        <div class="main__sound main__sound-2"></div>
        <div class="main__sound main__sound-2"></div>
        <div class="main__sound main__sound-2"></div>
        <div class="main__sound main__sound-2"></div>
        <div class="main__sound main__sound-2"></div>
        <div class="main__sound main__sound-2"></div>
      </div>
    </main>
  );
};

export default Main;
