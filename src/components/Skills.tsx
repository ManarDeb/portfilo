import * as React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  PhoneAndroid,
  Code,
  Storage,
  Build,
  Language,
} from '@mui/icons-material';

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5',
})) as typeof Box;

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
})) as typeof Paper;

const SkillIcon = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
})) as typeof Box;

const skillsData = [
  {
    category: 'Mobile Development',
    icon: <PhoneAndroid />,
    skills: ['Android', 'Flutter', 'iOS'],
  },
  {
    category: 'Backend Development',
    icon: <Code />,
    skills: ['Node.js', 'TypeScript', '.NET', 'Flask', 'Spring'],
  },
  {
    category: 'Frontend Development',
    icon: <Code />,
    skills: ['HTML', 'CSS', 'Symfony', 'JavaScript'],
  },
  {
    category: 'Programming Languages',
    icon: <Language />,
    skills: ['Java', 'Python', 'Dart', 'C#'],
  },
  {
    category: 'Databases',
    icon: <Storage />,
    skills: ['MySQL', 'Firebase', 'SQL Server', 'PostgreSQL'],
  },
  {
    category: 'Tools & Technologies',
    icon: <Build />,
    skills: ['GitHub', 'GitLab', 'Docker', 'JIRA', 'Figma'],
  },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillCard elevation={3}>
                <SkillIcon>
                  {category.icon}
                </SkillIcon>
                <Typography variant="h5" gutterBottom>
                  {category.category}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Typography
                      key={skillIndex}
                      variant="body1"
                      sx={{
                        display: 'inline-block',
                        mr: 1,
                        mb: 1,
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor: 'primary.main',
                        color: 'white',
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 