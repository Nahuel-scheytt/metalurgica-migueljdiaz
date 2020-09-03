export const makeAboutContainer = () => {
  return `text-align: center;
          margin: 50px 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          
          @media (min-width: 768px) {
            margin: 100px 0px;
          }`
}

export const makeTitle = () => {
  return `font-size: 40px;
          font-weight: 600;
          margin-bottom: 16px;
          
          @media (min-width: 768px) {
            font-size: 50px;
            margin-bottom: 32px;
          }`
}

export const makeParagraph = () => {
  return `padding: 0 15%;
          margin: 0px;
          
          @media (min-width: 768px) {
            font-size: 18px;
            padding: 0 20%;
          }`
}
