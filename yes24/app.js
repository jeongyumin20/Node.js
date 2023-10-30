// app.js
import express from 'express';
import loginRouter from './router/login.js';
import joinRouter from './router/join.js';
import bestSellerRouter from './router/bestSeller.js';
import realTimeRouter from './router/realTime.js';
import dayBestSellerRouter from './router/dayBestSeller.js';
import monthWeekRouter from './router/monthWeek.js';
import hotPriceRouter from './router/hotPrice.js';
import steadySellerRouter from './router/steadySeller.js';
import cookies from 'cookie-parser';

const app = express();

app.use(cookies());
app.use('/', loginRouter);
app.use('/join', joinRouter);
app.use('/BestSeller', bestSellerRouter);
app.use('/RealTimeBestSeller', realTimeRouter);
app.use('/DayBestSeller', dayBestSellerRouter);
app.use('/MonthWeekBestSeller', monthWeekRouter);
app.use('/HotPriceBestSeller', hotPriceRouter);
app.use('/SteadySeller', steadySellerRouter);


app.listen(8080);
