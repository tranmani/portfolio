import { WEBSITE_URL } from "@/lib/constants";
import { Body, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

interface IEmailProps {
  guestName: string;
  createdTime: string;
  coupon: string;
}

export const GoogleReviewWithCoupon = ({ guestName, coupon, createdTime }: IEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message from tranmani.com</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img src={`${WEBSITE_URL}/face.png`} width="40" height="40" alt="tranmani face" />
          <Section>
            <Text style={text}>Hi Beauty Art Pro SARL, {guestName} leave you a review on Google</Text>
            <Text style={text}>
              This is the coupon code for {guestName}: {coupon}
            </Text>
            <Text style={text}>The review was created at {createdTime}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default GoogleReviewWithCoupon;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};
