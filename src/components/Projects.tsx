import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, Launch } from '@mui/icons-material';

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const projectsData = [
  {
    title: 'Cyber\'ARK',
    description: 'A comprehensive gaming e-commerce platform supporting Web, Mobile, and Desktop interfaces.',
    image: '/projects/cyberark.jpg',
    technologies: ['Web', 'Mobile', 'Desktop'],
    github: 'https://github.com/ManarDeb/cyberark',
    demo: 'https://cyberark-demo.com',
  },
  {
    title: 'GreenTrack',
    description: 'An eco-awareness application with iOS and Android versions, plus a Flutter dashboard.',
    image: '/projects/greentrack.jpg',
    technologies: ['iOS', 'Android', 'Flutter', 'SwiftUI', 'Kotlin'],
    github: 'https://github.com/ManarDeb/greentrack',
    demo: 'https://greentrack-demo.com',
  },
  {
    title: 'HoloVerse',
    description: 'AI-powered holographic system featuring face recognition, GPS, and voice interaction.',
    image: '/projects/holoverse.jpg',
    technologies: ['Flutter', 'Flask', 'OpenAI', 'Raspberry Pi'],
    github: 'https://github.com/ManarDeb/holoverse',
    demo: 'https://holoverse-demo.com',
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProjectCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
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
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    startIcon={<Launch />}
                    href={project.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 