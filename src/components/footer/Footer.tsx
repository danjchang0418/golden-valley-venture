import React from "react";
import { styled } from "styled-components";
import { colors } from "../../core/constants/styleguide.const";
import { RESPONSIVE } from "../../core/constants/responsive.const";
import FooterLogoSrc from "../../assets/webroot/img/front/footer_logo.png";
import AppleAppSrc from "../../assets/webroot/img/front/apple_app_icn_white.png";
import GooglePalySrc from "../../assets/webroot/img/front/google_play_icn_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Content>
        <SubContent>
          <LogoImg src={FooterLogoSrc} />
          <StyledP>{`The business to business networking website to offer trading between companies like trading, manufacturing, wholesalers, retailers, contractors except government organizations. Companies can exchange between wide range of products & offered services.`}</StyledP>
        </SubContent>
        <StyledLinksSection>
          <SubContent>
            <StyledLink to={``}>{`Home`}</StyledLink>
            <StyledLink to={``}>{`Features`}</StyledLink>
            <StyledLink to={``}>{`Pricing`}</StyledLink>
            <StyledLink to={``}>{`FAQ`}</StyledLink>
            <StyledLink to={``}>{`How It Wroks`}</StyledLink>
            <StyledLink to={``}>{`Privacy Policy`}</StyledLink>
          </SubContent>
          <SubContent>
            <StyledText>{`© 2016 stafir.com`}</StyledText>
            <StyledText>{`All Rights Reserved`}</StyledText>
            <StyledLink to={``}>{`Terms and Conditions`}</StyledLink>
            <StyledLink to={``}>{`Web Solution Provider`}</StyledLink>
            <StyledLink to={``}>{`Company LogicSpice`}</StyledLink>
          </SubContent>
        </StyledLinksSection>
        <SubContentForButtons>
          <GooglePlayButton />
          <AppleAppButton />
        </SubContentForButtons>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.neutrals2};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  gap: 30px;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    flex-direction: row;
    width: 70%;
  }
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubContentForButtons = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: space-between;
  gap: 20px;
	@media screen and (min-width: ${RESPONSIVE.small}){
		flex-direction: column;
    justify-content: flex-start;
	}
`;

const StyledLinksSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
	justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: ${colors.neutrals8};
  font-weight: 200;
  &:hover {
    color: ${colors.neutrals4};
  }
  @media screen and (min-width: ${RESPONSIVE.small}) {
    width: 200px;
  }
`;

const StyledText = styled.p`
  font-size: 20px;
  margin: 0px;
  color: ${colors.neutrals8};
  font-weight: 200;
`;

const LogoImg = styled.img`
  width: 150px;
  height: 29px;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: ${colors.neutrals8};
  font-weight: 200;
`;

const GooglePlayButton = styled.div`
  border-radius: 5px;
  font-size: 16px;
  height: 58px;
  width: 172px;
  border: 1px solid ${colors.neutrals6};
  font-family: Calibri;
  font-size: 20px;
  background: url(${GooglePalySrc});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

const AppleAppButton = styled.div`
  border-radius: 5px;
  font-size: 16px;
  height: 58px;
  width: 172px;
  border: 1px solid ${colors.neutrals6};
  font-family: Calibri;
  font-size: 20px;
  background: url(${AppleAppSrc});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
export default Footer;
