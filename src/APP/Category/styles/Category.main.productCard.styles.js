import styled from "styled-components";
import * as tokens from "../../tokens";

export const cardWrap = styled.div`
  width: ${props => (props.type === 'best' ? '292px' : '330px;')};
  height: ${props => (props.type === 'best' ? '498px' : '548px')};
  border-radius: 6px;
  border: 1px solid ${tokens.colors.grey_60}; 

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${props => (props.type === 'best' ? '40px' : '')};
`;


export const img = styled.img`
  width: ${props => (props.type === 'best' ? '292px' : '330px;')};
  height: ${props => (props.type === 'best' ? '390px' : '440px')};
  border-radius: 5px 5px 0px 0px;
`;

export const descripWrap = styled.div`
  width: 292px;
  height: 104px;
  padding: 0px 0px 12px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const text = styled.span`
  font-family: Pretendard;

  width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
  ${(props) =>
    props.type === "brand"
      ? `
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0em;
`
      : ` 
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0em;
            `}
`;
