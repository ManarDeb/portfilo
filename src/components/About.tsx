import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" gutterBottom>
                Professional Background
              </Typography>
              <Typography paragraph>
                I am a passionate Mobile Developer with expertise in Android, Flutter, and iOS development.
                My journey in software engineering has equipped me with a strong foundation in both mobile
                and web technologies, allowing me to create comprehensive solutions that meet modern
                business needs.
              </Typography>
              <Typography paragraph>
                Currently pursuing my Engineering Degree in Software Engineering at ESPRIT, I combine
                academic knowledge with practical experience to deliver high-quality applications.
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h5" gutterBottom>
                Languages & Communication
              </Typography>
              <Typography paragraph>
                • Arabic (Native)
              </Typography>
              <Typography paragraph>
                • French (Fluent)
              </Typography>
              <Typography paragraph>
                • English (Intermediate)
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Contact Information
              </Typography>
              <Typography paragraph>
                • Email: manar.debiche@esprit.tn
              </Typography>
              <Typography paragraph>
                • Phone: +216 58049848
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About; 