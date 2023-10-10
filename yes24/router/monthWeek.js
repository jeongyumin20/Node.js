// monthWeek.js
import express from 'express';
import ejs from 'ejs';
import * as list from './data.js';

const router = express.Router();

router.get('/:page', (req, res, next) => {
  res.json(list.monthWeekBestSellerList);
});

export default router;
