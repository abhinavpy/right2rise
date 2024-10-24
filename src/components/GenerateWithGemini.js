// GenerateWithGemini.js (Optional: Separating the component for clarity)
import React from 'react';
import { Stack, Typography, Tooltip, Link } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

const GenerateWithGemini = ({ prompt }) => {

  return (
    <Stack direction="column" spacing={0.5} alignItems="flex-start">
      <Stack direction="row" spacing={1} alignItems="center">
        <AutoAwesomeIcon style={{ fontSize: '1rem' }} />
        <Typography variant="caption">
          Generated with{' '}
          <Link
            style={{ color: '#D4A35A' }} // Gold color
            href="https://gemini.google.com"
            target="_blank"
            rel="noopener"
          >
            Gemini
          </Link>
        </Typography>
      </Stack>
      <Tooltip
        sx={{ cursor: 'pointer' }}
        title={<ReactMarkdown>{prompt}</ReactMarkdown>}
        placement="top"
        arrow
      >
        <InfoRoundedIcon style={{ fontSize: '1rem', color: '#E7DCC8' }} /> {/* Cream color */}
      </Tooltip>
    </Stack>
  );
};

export default GenerateWithGemini;
