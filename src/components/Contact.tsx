/// <reference types="react" />
import * as React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5',
})) as typeof Box;

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
})) as typeof Paper;

const ContactInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})) as typeof Paper;

const Contact = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <ContactForm elevation={3}>
              <Typography variant="h5" gutterBottom>
                Send a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </ContactForm>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInfo elevation={3}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    manar.debiche@esprit.tn
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    +216 58049848
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LinkedIn sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    <Link
                      href="https://linkedin.com/in/debiche-manar"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      linkedin.com/in/debiche-manar
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <GitHub sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    <Link
                      href="https://github.com/ManarDeb"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      github.com/ManarDeb
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </ContactInfo>
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 