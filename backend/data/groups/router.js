import express from 'express';
import multer from 'multer';
import { addGroup } from './controller.js';

export const router = new express.Router();
export const upload = multer();

// router.post('/group', addGroup);
router.post('/group', upload.none(), addGroup);
