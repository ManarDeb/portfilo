import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(8),
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5',
})) as typeof Box;

const SocialButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(2),
})) as typeof Button;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Hi, I'm Manar Debiche
            </Typography>
            <Typography variant="h2" color="primary" gutterBottom>
              Mobile Developer
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Passionate about creating innovative mobile solutions and delivering exceptional user experiences.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <SocialButton
                variant="contained"
                startIcon={<GitHub />}
                href="https://github.com/ManarDeb"
                target="_blank"
              >
                GitHub
              </SocialButton>
              <SocialButton
                variant="contained"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/debiche-manar"
                target="_blank"
              >
                LinkedIn
              </SocialButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/profile-placeholder.jpg"
              alt="Manar Debiche"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: '50%',
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;

 