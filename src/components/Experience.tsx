import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Work } from '@mui/icons-material';

const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const experienceData = [
  {
    company: 'Orange Digital Center',
    position: 'Mobile Developer',
    period: 'Summer 2024',
    description: 'Developed a mobile app for dialysis patients integrating health devices.',
    technologies: ['Flutter', 'Node.js', 'TypeScript', 'Prisma'],
  },
  {
    company: 'VTL Groupe',
    position: 'Web Developer',
    period: 'Summer 2023',
    description: 'Built a web platform for internships and job opportunities.',
    technologies: ['Symfony', 'MySQL'],
  },
  {
    company: 'SagemCom Tunisie',
    position: 'Mobile Developer',
    period: '2022',
    description: 'Designed a mobile stock management system with barcode scanning.',
    technologies: ['Android', 'Java', 'ASP.NET', 'SQL Server'],
  },
  {
    company: 'Cloud Master',
    position: 'Mobile Developer',
    period: '2021',
    description: 'Created a food delivery app.',
    technologies: ['Java', 'PHP', 'MySQL'],
  },
  {
    company: 'Tunisie Telecom',
    position: 'IT Intern',
    period: '2020',
    description: 'Observational internship to explore professional IT environments.',
    technologies: ['IT Infrastructure', 'Networking'],
  },
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Professional Experience
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Timeline position="alternate">
            {experienceData.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                  {index < experienceData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard elevation={3}>
                    <Typography variant="h5" gutterBottom>
                      {experience.position}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {experience.company}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {experience.period}
                    </Typography>
                    <Typography paragraph>
                      {experience.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {experience.technologies.map((tech, techIndex) => (
                        <Typography
                          key={techIndex}
                          variant="body2"
                          sx={{
                            display: 'inline-block',
                            mr: 1,
                            mb: 1,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            backgroundColor: 'primary.main',
                            color: 'white',
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </ExperienceCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 