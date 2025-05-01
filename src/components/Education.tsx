import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { School } from '@mui/icons-material';

const EducationSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const EducationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const educationData = [
  {
    degree: 'Engineering Degree in Software Engineering (SIM)',
    institution: 'ESPRIT, Tunis',
    period: 'Ongoing',
    description: 'Focus on software engineering and mobile development.',
  },
  {
    degree: 'National Degree in IT',
    institution: 'ISET Kairouan',
    period: '2019–2022',
    description: 'Comprehensive IT education with focus on practical applications.',
  },
  {
    degree: 'Baccalaureate in Computer Science',
    institution: 'Lycée 7 Avril 1943, Menzel Temime',
    period: '2018–2019',
    description: 'Foundation in computer science and programming.',
  },
];

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {educationData.map((education, index) => (
            <Grid item xs={12} md={4} key={index}>
              <EducationCard elevation={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <School sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      {education.degree}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {education.institution}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {education.period}
                </Typography>
                <Typography paragraph>
                  {education.description}
                </Typography>
              </EducationCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </EducationSection>
  );
};

export default Education; 