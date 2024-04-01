import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface RoleSelectorProps {
  onChange: (role: string) => void;
}

type roles = 'Developer' | 'Student' | 'IT Professional' | 'DevOps Engineer'

export default function RoleSelector({onChange}: RoleSelectorProps) {
  const [role, setRole] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
    onChange(event.target.value as string);
  };
  
  return (
    <Box sx={{ minWidth: 120, marginBottom: "10px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={'developer'}>Developer</MenuItem>
          <MenuItem value={'student'}>Student</MenuItem>
          <MenuItem value={'it-professional'}>IT Professional</MenuItem>
          <MenuItem value={'devops-engineer'}>DevOps Engineer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
