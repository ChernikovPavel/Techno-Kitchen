import { Typography } from '@mui/material';
import RegisterPageInputs from './RegisterPageInputs';

export default function Register() {
  return (
    <>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Create an Acoount!
      </Typography>
      <Typography sx={{ color: '#b9bbbe' }}>
        Start configurate your own PC
      </Typography>
      <RegisterPageInputs />
    </>
  );
}
