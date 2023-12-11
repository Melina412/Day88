import express from 'express';
import multer from 'multer';
import { addSong } from './controller.js';

export const router = new express.Router();
export const upload = multer();

// router.post('/song', addSong); // post route für eingabe in controller.js
router.post('/song', upload.none(), addSong); // post route für input form
