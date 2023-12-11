import express from 'express';
import multer from 'multer';
import { addMember } from './controller.js';

export const router = new express.Router();
export const upload = multer();

// router.post('/member', addMember);
router.post('/member', upload.none(), addMember);
