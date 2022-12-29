import { Box, Typography, styled, Grid } from "@mui/material";

const FooterSection = styled(Box)`
position: fixed;
bottom: 0;
// background: linear-gradient(to right bottom, #f4f2f5, #e8faf8);
width: 100%;
height: 8vh;
margin: auto;
`;

const FooterContent = styled(Grid)`
padding: 20px 20px;
color: #fff;
`;

const Footer = () => {
  return (

    <FooterSection
     color={'transparent'}
     >
      <FooterContent>
        {" "}

        <Typography
          variant="body"
          style={{
            color: "rgb(34, 43, 54, 0.7)",
            fontFamily: "monospace",
            fontWeight: "700",
          }}
        >
          {" "}
          support @ 2022 KYC PTE LTD{" "}
        </Typography>
      
      
      </FooterContent>
    </FooterSection>

  );
};

export default Footer;
