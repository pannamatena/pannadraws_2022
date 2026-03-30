import React from 'react';
/** @jsxImportSource @emotion/react */
import Img from 'react-cool-img';
import style from './style';

import ImgLarge from '../../resources/pictures/2026/the_changewing_nest_2026_web.jpg';
import ImgDetail1 from '../../resources/pictures/2025/rocs_and_brynrfel_2025_web.jpg';
import ImgDetail2 from '../../resources/pictures/2025/the_forest_pact_2025_web.jpg';
import ImgWide from '../../resources/pictures/2024/the_librarian_2024_web.jpg';

export default function WorkGallery() {
  return (
    <div>
      <h3>Previous Work</h3>
      <div css={style.grid}>
        <div css={style.cellLarge}>
          <Img
            lazy
            cache
            src={ImgLarge}
            alt="The Changewing Nest — fantasy watercolour illustration by PannaDraws"
            css={style.imgLarge}
          />
        </div>
        <div css={style.cellDetail}>
          <Img
            lazy
            cache
            src={ImgDetail1}
            alt="Rocs and Brynrfel — fantasy watercolour illustration by PannaDraws"
            css={style.imgDetail1}
          />
        </div>
        <div css={style.cellDetail}>
          <Img
            lazy
            cache
            src={ImgDetail2}
            alt="The Forest Pack — fantasy watercolour illustration by PannaDraws"
            css={style.imgDetail2}
          />
        </div>
        <div css={style.cellWide}>
          <Img
            lazy
            cache
            src={ImgWide}
            alt="The Librarian — fantasy watercolour illustration by PannaDraws"
            css={style.imgWide}
          />
        </div>
      </div>
    </div>
  );
}
