import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Img from 'react-cool-img';
import { Link } from 'react-router-dom';
import style from './style';

export default function MasonryLayout(props) {
  const [imgIds, setImgIds] = useState([]);

  useEffect(() => {
    setImgIds(Object.keys(props.imgData));
  }, [props.imgData]);

  const resizeGridItem = (item) => {
    if (window) {
      const grid = document.getElementById('artGridContainer');
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      );
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      );
      const rowSpan = Math.ceil(
        (item.querySelector('.artGridItem__content').getBoundingClientRect()
          .height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = 'span ' + rowSpan;
    }
  };

  const resizeAllGridItems = () => {
    const allItems = document.getElementsByClassName('artGridItem');
    for (let i = 0; i < allItems.length; i++) {
      resizeGridItem(allItems[i], i);
    }
  };

  useEffect(() => {
    resizeAllGridItems();

    window.addEventListener('resize', resizeAllGridItems);
    return () => {
      window.removeEventListener('resize', resizeAllGridItems);
    };
  });

  const renderGridItems = () => {
    return (
      imgIds &&
      imgIds.map((imgId, index) => (
        <div className="artGridItem" css={style.artGridItem} key={index}>
          <div className="artGridItem__content">
            <Link css={style.artGridImg} to="/">
              <Img
                src={props.imgData[imgId].imgEl}
                alt={props.imgData[imgId].description}
              />
            </Link>
            <div css={style.artGridMeta}>
              <h5>{props.imgData[imgId].title}</h5>
              <p css={style.artGridMetaDesc}>
                {props.imgData[imgId].description}
              </p>
            </div>
          </div>
        </div>
      ))
    );
  };

  return (
    <div id="artGridContainer" css={style.artGrid}>
      {renderGridItems()}
    </div>
  );
}
