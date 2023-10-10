// app.js
import express from 'express';
import bestSellerRouter from './router/bestSeller.js';
import realTimeRouter from './router/realTime.js';
import dayBestSellerRouter from './router/dayBestSeller.js';
import monthWeekRouter from './router/monthWeek.js';
import hotPriceRouter from './router/hotPrice.js';
import steadySellerRouter from './router/steadySeller.js';

const app = express();

app.use('/BestSeller', bestSellerRouter);
app.use('/RealTimeBestSeller', realTimeRouter);
app.use('/DayBestSeller', dayBestSellerRouter);
app.use('/MonthWeekBestSeller', monthWeekRouter);
app.use('/HotPriceBestSeller', hotPriceRouter);
app.use('/SteadySeller', steadySellerRouter);

app.listen(8080);
