import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";

  
  interface KoalaWelcomeEmailProps {
    userFirstname: string;
  }
  
  const baseUrl = 'https://plan-pro-business.vercel.app'
    ? `https://plan-pro-business.vercel.app`
    : "";
  
  export const KoalaWelcomeEmail = ({
    userFirstname,
  }: KoalaWelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
A plataforma para acelerar seu negócio. tenha agora seu plano de negócios em minutos.      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            // src="/assets/JobeirosAmarelo.png"
            src="https://plan-pro-business.vercel.app/assets/1.png"
            width="200"
            height="200"
            alt="Logo PPB"
            style={logo}
          />
          <Text style={paragraph}>Olá {userFirstname},</Text>
          <Text style={paragraph}>
          Bem-vindo ao PlanProBusiness,
          a plataforma que te ajuda a começar seu negócio.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://plan-pro-business.vercel.app">
              Comece Agora
            </Button>
          </Section>
          <Text style={paragraph}>
            Atenciosamente,
            <br />
           Equipe PlanProBusiness
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            {/* TEXTO DE ENDERECO  */}
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  KoalaWelcomeEmail.PreviewProps = {
    userFirstname: "Alan",
  } as KoalaWelcomeEmailProps;
  
  export default KoalaWelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#00308F",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  