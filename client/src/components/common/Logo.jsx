import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Movies<span style={{ color: theme.palette.primary.main }}>Info</span>
    </Typography>
  );
};

export default Logo;