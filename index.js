// const express = require('express');

import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express();
const port = 4000;


// app.get('/',(req,res) =>
// {
//   res.send("hello ji");
// });


app.get('/api/jokes',(req,res) =>
{
  const jokes = [
  {
    id: 1,
    title: "Pun",
    category: "Why don't scientists trust atoms? Because they make up everything!"
  },
  {
    id: 2,
    title: "Programming",
    category: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 3,
    title: "Dad Joke",
    category: "Did you hear about the claustrophobic astronaut? He just needed a little space."
  },
  {
    id: 4,
    title: "Animal",
    category: "What do you call a fish wearing a bowtie? Sofishticated."
  },
  {
    id: 5,
    title: "Food",
    category: "Why did the tomato turn red? Because it saw the salad dressing!"
  }
];
  res.send(jokes);

});

app.listen(process.env.PORT || port,(req,res) =>
{
  console.log(`Server running on port ${process.env.PORT || port}`);
})