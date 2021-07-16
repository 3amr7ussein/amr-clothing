import styled,{css} from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
height: 70px;
margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`;

 export const OptionsContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
height: 100%;
justify-content: flex-end;
`;

const OptionClassStyle = css`
            padding: 10px 15px;
            cursor: pointer;
`;


export const OptionContainer = styled(Link)`
${OptionClassStyle}
`;