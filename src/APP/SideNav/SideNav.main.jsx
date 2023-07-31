import styled from "styled-components";
import * as tokens from "../tokens";
import * as SideNavS from "./Styled/SideNav.main.styles";

//components
import List from "./SideNav.main.list.jsx";
import search from "./SideNav.main.search.jsx";

function SideNav() {
    const NavClick = (e, type) => {
		e.preventDefault();
		alert(
			`${type}버튼이 클릭됐습니다. 이 함수를 활용해서 다른 페이지로 이동하게 하시면 됩니다!`
		);
	};
    return (
    <SideNavS.SideNavWrapper>
        <SideNavS.SideNavSearchWrapper>
            <SideNavS.SideNavInputBox></SideNavS.SideNavInputBox>
            <SideNavS.SideNavInputIcon></SideNavS.SideNavInputIcon>
        </SideNavS.SideNavSearchWrapper>
        <SideNavS.SideNavList
            onClick={(e) => {
                NavClick(e, "ECO-PRODUCTS");
            }}>
            ECO-PRODUCTS
        </SideNavS.SideNavList>
        <SideNavS.SideNavList
            onClick={(e) => {
                NavClick(e, "ECO-STORE");
            }}>
            ECO-STORE
        </SideNavS.SideNavList>
        <SideNavS.SideNavList
            onClick={(e) => {
                NavClick(e, "COMMUNITY");
            }}>
            COMMUNITY
        </SideNavS.SideNavList>
    </SideNavS.SideNavWrapper>
    );
}
export default SideNav;