export const makeParallaxBannerContainer = () => {
  return `height: 300px;

          @media (min-width: 768px) {
            height: 500px;
          }`
}

export const makeHeading = () => {
  return `width: 100%;
          height: 300px;
          text-align: center;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          
          @media (min-width: 768px) {
            height: 500px;
          }`
}

export const makeTitle = () => {
  return `margin: 0px;`
}
