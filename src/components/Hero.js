

import { Box, Typography, List, ListItem, styled  } from '@mui/material';

const HeroSection = styled(Box)`
background: linear-gradient(to right bottom, #f4f2f5, #e8faf8);
margin-top: auto;
height: 800px;
`

const Hero = () => {
    
    return (
        <HeroSection>
        <Box >
            {/* <Box>
                <Typography variant="h4">KNOW YOUR CUSTOMERS</Typography>
                <Typography variant="h6" mt={4}><b>Hey, It's me!</b></Typography>
                <Typography>
                    I'm a Software Engineer based in India. I've built websites, desktop applications and corporate software.
                    If you are interested, you can view some of my favorite projects on&nbsp; 
                    <a href="https://github.com/kunaltyagi9" style={{ color: 'blue' }}>Github</a>
</Typography>
                <Typography>  
                    Need something built or simply want to have chat? Reach out to me on&nbsp; 
                    <a href="https://www.instagram.com/codeforinterview/" style={{ color: 'blue' }}>social media</a> 
                    &nbsp;or send me an <span title="codeforinterview03@gmail.com" style={{ color: 'blue' }}>email</span>.
                </Typography>
            </Box>
            <Box>

                <Typography variant="h6" mt={3}><b>MY PERSONAL INTERESTS</b></Typography>
                <Typography>When I am not coding my next project, I enjoy spending my time doing any of the following:
                </Typography>
            
            </Box> */}
        </Box>
        </HeroSection>
    )
}

export default Hero;