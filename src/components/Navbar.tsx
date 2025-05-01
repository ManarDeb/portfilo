import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  margin: '0 8px',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
  },
}));

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Manar Debiche
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
          <NavButton onClick={() => scrollToSection('skills')}>Skills</NavButton>
          <NavButton onClick={() => scrollToSection('experience')}>Experience</NavButton>
          <NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton>
          <NavButton onClick={() => scrollToSection('education')}>Education</NavButton>
          <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
            sx={{ ml: 2 }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 