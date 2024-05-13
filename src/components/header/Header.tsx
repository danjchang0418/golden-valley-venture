import { Else, If, Then } from "react-if";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../core/hooks/rtkHooks";

import Logo from "../../assets/webroot/img/logos/logo(38x26).png";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import { colors } from "../../core/constants/styleguide.const";
import { useWatchResize } from "../../core/hooks/useWatchResize";
import {
  setShowSignInModalAction,
  setShowSignUpModalAction,
} from "../../core/store/slices/modalSlice";
import {
  faqPath,
  featuresPath,
  homePath,
} from "../../core/util/pathBuilder.util";
import BurgerButton from "../button/burger-button/BurgerButton";
import { ButtonPrimarySmall } from "../styleguide/styleguide";

import SignInModal from "../modal/children/modal-content/SignInModal";
import SignUpModal from "../modal/children/modal-content/SignUpModal";
import AlertComponent from "../alert/AlertComponent";

const Header = () => {
  const { smallerThanLarge } = useWatchResize();

  const dispatch = useAppDispatch();

  const { showSignUpModal, showSignInModal } = useAppSelector(
    (state) => state.modal
  );
  const { showAlert } = useAppSelector((state) => state.alert);

  const sign_up = () => {
    dispatch(setShowSignUpModalAction(true));
  };

  const sign_in = () => {
    dispatch(setShowSignInModalAction(true));
  };

  return (
    <>
      <StyledHeader style={{ zIndex: 2 }}>
        <LogoSection>
          <img src={Logo} style={{ width: "25px", height: "24px" }} alt="logo"></img>
          <h3 style={{ color: `${colors.neutrals8}` }}>{`GVV`}</h3>
        </LogoSection>
        <NavigateSection>
          <If condition={!smallerThanLarge}>
            <Then>
              <StyledLink to={homePath()}>{`Home`}</StyledLink>
              <StyledLink to={""}>{`Page`}</StyledLink>
              <StyledLink to={""}>{`Portfolio`}</StyledLink>
              <StyledLink to={featuresPath()}>{`Features`}</StyledLink>
              <StyledLink to={faqPath()}>{`Blog`}</StyledLink>
              <StyledLink to={""}>{`Contact`}</StyledLink>
            </Then>
            <Else>
              <BurgerButton />
            </Else>
          </If>
          <StyledButtonGroup>
            <StyledSignUpButton onClick={sign_in}>{`Sign up`}</StyledSignUpButton>
            <StyledLogInButton onClick={sign_up}>{`Login`}</StyledLogInButton>
          </StyledButtonGroup>
        </NavigateSection>
      </StyledHeader>
      {showSignUpModal && <SignUpModal />}
      {showSignInModal && <SignInModal />}
      {showAlert && <AlertComponent />}
    </>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: ${colors.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 1px grey;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  @media screen and (min-width: ${RESPONSIVE.bigmobile}) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: ${RESPONSIVE.small}) {
    padding: 0px 100px 0px 100px;
  }
  @media screen and (min-width: ${RESPONSIVE.xLarge}) {
    padding: 0px 300px 0px 300px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const NavigateSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  gap: 30px;
  @media screen and (max-width: ${RESPONSIVE.large}) {
    gap: 15px;
  }
  @media screen and (max-width: ${RESPONSIVE.small}) {
    gap: 5px;
  }
  @media screen and (max-width: ${RESPONSIVE.bigmobile}) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  font-weight: 300;
  color: ${colors.neutrals8};
  &:hover {
    color: ${colors.primaryYellow};
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const StyledSignUpButton = styled(ButtonPrimarySmall)`
  margin-left: 50px;
  border-radius: 0px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  height: 32px;
  width: 83px;
  background: ${colors.mainColor};
`;

const StyledLogInButton = styled(ButtonPrimarySmall)`
border-radius: 0px;
font-size: 16px;
border: none;
height: 32px;
width: 83px;
background: ${colors.primaryYellow};
color: ${colors.mainColor};
`;

export default Header;
