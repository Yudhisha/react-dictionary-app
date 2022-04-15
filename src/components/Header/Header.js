import React from 'react'
import './Header.css';
import TextField from '@mui/material/TextField';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Categories from '../../data/category';

const Header = ({category, setCategory, word, setWord, LightMode}) => {

    const handleChange=(language)=>{
       setCategory(language);
       setWord("");
    }

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: LightMode ? '#00000' : '#ffff'
            },
          mode: LightMode ? 'light' : 'dark',
        },
      });

  return (
    <div className='header'>
        <span className='title'>{word ? word : "Word Hunt" }</span>
        <div className="inputs">
            <ThemeProvider theme={darkTheme}>
                <TextField  label="Search a word" className="search" value={word} onChange={(e)=>setWord(e.target.value)}/>
                <TextField
                className='select'
                    select
                    label="Languages"
                    value={category} 
                    onChange={(e)=>handleChange(e.target.value)}
                    >
                        {Categories.map((option)=>(
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}
                       
                </TextField>    
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Header