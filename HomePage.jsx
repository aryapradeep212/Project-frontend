import React from 'react';
import { Box, Card,  CardContent, Divider, IconButton, Typography, InputBase } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
import bg from './images/bg.jpg';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:9453/viewbook')
      .then((response) => {
        console.log(response.blog);
        setBlogs(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const bookName = blog.bookname.toLowerCase();
    const description = blog.description.toLowerCase();
    const query = searchQuery.toLowerCase();
    return bookName.includes(query) || description.includes(query);
  });

  return (
    <div>
      
    
      <div style={{ position: 'relative' }}>
        <Box sx={{ width: '100%', height: '80%' }}>
          <img src={bg} alt='back' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        
      <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
      
      {/* searchbar */}
      
          <div style={{ display: 'flex', alignItems: 'center', height: '70%', width: '30vw', margin: 'auto', opacity: 3, background: 'rgba(225, 225, 225,0.5)', borderRadius: '15px' }}>
            <SearchIcon style={{ position: 'absolute', left: '10px' }} />
              <InputBase
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
                fullWidth
                inputProps={{ style: { textAlign: 'center' } }}
              />
          </div>
             
      </div>
      </div>
      
      <br /><br />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* mapping */}
        {filteredBlogs.map((value, index) => {
          return (
            <box style={{margin:'10px'}}>
              <div >
            <Card key={index} sx={{ maxWidth: 345, margin: '10px',boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.9)' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.bookname}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {value.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.genre}
                </Typography>
              </CardContent>
              <Divider></Divider>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Card>
            </div>
            </box>
          );
        })}
      </div>
      
    </div>
  );
};

export default HomePage;
