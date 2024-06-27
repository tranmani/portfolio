import { WEBSITE_URL } from "@/lib/constants";
import { Body, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components";
import * as React from "react";

interface IChatMessage {
  id: number;
  content: string;
  isMe: boolean;
  time?: string;
}

interface IEmailProps {
  guestName?: string;
  guestEmail?: string;
  guestMessages?: IChatMessage[];
}

export const GuestVisit = ({
  guestName = "Guest",
  guestEmail = "minhhuy8137@gmail.com",
  guestMessages = [],
}: IEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Message from tranmani.com</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img src={`${WEBSITE_URL}/face.png`} width="40" height="40" alt="tranmani face" />
          <Section>
            <Text style={text}>
              Hi Huy, {guestName} leave you a message with their email {guestEmail}
            </Text>
            {guestMessages.map((message) => (
              <Container style={containerMessage} key={message.id}>
                <Text style={textMessage}>
                  {message.content} at {message.time}, {message.isMe ? <b>guest</b> : "me"}
                </Text>
              </Container>
            ))}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default GuestVisit;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const containerMessage = {
  backgroundColor: "#e1e1e1",
  border: "1px solid #f0f0f0",
  padding: "0 5px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const textMessage = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "20px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};
