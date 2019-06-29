import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { SiteModel } from './App';
import * as serviceWorker from './serviceWorker';

const siteModel: SiteModel = {
  title: 'Hottest Growth SaaS Company in Austin You’ve Never Heard of Poised for Even More Dynamic Growth',
  publicationInfo: 'January 14, 2019, Austin, TX',
  paragraphs: [
    'Founded in 2005 in Austin, TX, AffiniPay is a leading financial technology company that has experienced exponential growth over the past 13 years. Profitable for more than a decade, and consistently atop the ABJ’s Fast 50 list of the fastest growing companies in Central Texas, AffiniPay is ramping up for even more growth in 2019. Central to this plan is the addition of Tom West, former CEO and Owner of Springbox, as Chief Growth Officer.',
    'AffiniPay currently employs 120 people and is looking to add more than 60 additional team members in 2019. “I’m thrilled to be joining a team that already has such an unbelievable growth story and to be working across the company to take growth to the next level,” said Tom West. “AffiniPay is transforming the way professionals get paid. We are leading the shift to online payments and accelerating growth by 50% for 2019.”',
    'AffiniPay has been ranked in the Austin Business Journal’s Fast 50 for the last six consecutive years, with a 2018 ranking of #10 based on 40% AGR from 2015-17. They’ve also been named to Inc. magazine’s Top 100 Financial Service Companies and were listed in Inc.’s annual ranking the last seven consecutive years. Amy Porter, CEO and Founder of AffiniPay, received the EY Entrepreneur Of The Year® 2016 Award in the Financial Technology category for the Central Texas region.',
    '“We’re so excited to bring Tom on board to help propel our existing success into even greater future growth” said Amy Porter. “His demonstrated success as a people-leader also makes him a great cultural fit for our team. Our drive to be leaders in fintech has fostered our energetic, highly collaborative culture. Staff happiness and well-being are key to our success and we’re proud to have assembled a team of enthusiastic problem solvers who are passionate about both company and personal growth.”'
  ]
}

ReactDOM.render(<App siteModel={siteModel} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
