import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'solutions',
    links: [
      { label: 'Ecommerce', icon: <FaCreditCard />, url: '/products' },
      { label: 'Saas', icon: <FaCreditCard />, url: '/products' },
      { label: 'Marketplaces', icon: <FaCreditCard />, url: '/products' },
      { label: 'Embedded Finance', icon: <FaCreditCard />, url: '/products' },
      { label: 'Platforms', icon: <FaCreditCard />, url: '/products' },
      { label: 'Creator Economy', icon: <FaCreditCard />, url: '/products' },
      { label: 'Crypto', icon: <FaCreditCard />, url: '/products' },
      { label: 'Global Bussinesses', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'resources',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
  {
    page: 'pricing',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export const reviewInfo = [
  {
    id: 1,
    title: "Trusted by founders and investors",
    desc: "Join thousands of founders from more than 140 countries who have formed their companies using Stripe Atlas, with a best-in-class legal structure that’s built for scale. Stripe Atlas companies have raised more than $2 billion in funding.",
    logo: <svg className="Icon " viewBox="0 0 39 37" xmlns="http://www.w3.org/2000/svg" width={39} height={37}>
      <path d="M1.55 35.68l12.32-6.4a1 1 0 0 0 .44-.45L24.8 6.7a1 1 0 0 1 1.56-.33l12.3 10.64a1 1 0 0 1 .34.76V33a4 4 0 0 1-4 4H1.87a.7.7 0 0 1-.32-1.32z" className="Icon__blendBackground" fill='#ffd848' />
      <path d="M.76 34.6L12.1 19.26a1 1 0 0 1 1.09-.37l11.65 3.4a1 1 0 0 0 1.17-.5L37.1.6a1 1 0 0 1 1.89.46V33a4 4 0 0 1-4 4H1.97a1.5 1.5 0 0 1-1.2-2.4z" className="Icon__blendForeground" fill='#fb0' />
      <g clipPath="url(#areaChartIconClipPath--a)">
        <path d="M.76 34.6L12.1 19.26a1 1 0 0 1 1.09-.37l11.65 3.4a1 1 0 0 0 1.17-.5L37.1.6a1 1 0 0 1 1.89.46V33a4 4 0 0 1-4 4H1.97a1.5 1.5 0 0 1-1.2-2.4z" className="Icon__blendForeground" fill='#ff7600' />
      </g> </svg>,
  },

  {
    id: 2,
    title: "Access Stripe’s financial tools",
    desc: "Use your Stripe account to access powerful and flexible tools for internet commerce. Stripe’s meticulously designed APIs and unmatched functionality help you create the best possible product for your users.",
    logo: <svg className="Icon " width={40} height={40} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path className="Icon__blendForeground" style={{ fill: '#fb0' }} d="M36 11a4 4 0 0 1 4 4v21a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V15a4 4 0 0 1 4-4zm-7.9 18h-1.2a1 1 0 0 0-.54.09.59.59 0 0 0-.27.27 1 1 0 0 0-.09.54v5.2a1 1 0 0 0 .09.54.59.59 0 0 0 .27.27 1 1 0 0 0 .54.09h1.2a1 1 0 0 0 .54-.09.59.59 0 0 0 .27-.27 1 1 0 0 0 .09-.54v-5.2a1 1 0 0 0-.09-.54.59.59 0 0 0-.27-.27 1 1 0 0 0-.54-.09zm7-3h-1.2a1 1 0 0 0-.54.09.59.59 0 0 0-.27.27 1 1 0 0 0-.09.54v8.2a1 1 0 0 0 .09.54.59.59 0 0 0 .27.27 1 1 0 0 0 .54.09h1.2a1 1 0 0 0 .54-.09.59.59 0 0 0 .27-.27 1 1 0 0 0 .09-.54v-8.2a1 1 0 0 0-.09-.54.59.59 0 0 0-.27-.27 1 1 0 0 0-.54-.09zm-21 0h-1.2a1 1 0 0 0-.54.09.59.59 0 0 0-.27.27 1 1 0 0 0-.09.54v8.2a1 1 0 0 0 .09.54.59.59 0 0 0 .27.27 1 1 0 0 0 .54.09h1.2a1 1 0 0 0 .54-.09.59.59 0 0 0 .27-.27 1 1 0 0 0 .09-.54v-8.2a1 1 0 0 0-.09-.54.59.59 0 0 0-.27-.27 1 1 0 0 0-.54-.09zm7-7h-1.2a1 1 0 0 0-.54.09.59.59 0 0 0-.27.27 1 1 0 0 0-.09.54v15.2a1 1 0 0 0 .09.54.59.59 0 0 0 .27.27 1 1 0 0 0 .54.09h1.2a1 1 0 0 0 .54-.09.59.59 0 0 0 .27-.27 1 1 0 0 0 .09-.54V19.9a1 1 0 0 0-.09-.54.59.59 0 0 0-.27-.27 1 1 0 0 0-.54-.09z" />
      <path className="Icon__blendBackground" style={{ fill: '#ffd848' }} d="M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zM16 6a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
      <path className="Icon__blendForeground" style={{ fill: '#ff7600' }} d="M32 11v7a4 4 0 0 1-4 4h-6v-2.1a1 1 0 0 0-.09-.54.59.59 0 0 0-.27-.27 1 1 0 0 0-.54-.09h-1.2a1 1 0 0 0-.54.09.59.59 0 0 0-.27.27.9.9 0 0 0-.09.42V22H8v-7a4 4 0 0 1 3-3.87V11a5 5 0 0 0 10 0z" />
    </svg>,
  },

  {
    id: 3,
    title: "Grow and scale with free credits",
    desc: "Every dollar matters when you start your company. Sign up for discounts from our partners, including Amazon Web Services, legal and accounting firms, and more.",
    logo: <svg className="AnimatedIcon__icon" width={40} height={40} preserveAspectRatio="xMinYMin" viewBox="10 30 40 40" xmlns="http://www.w3.org/2000/svg" data-js-controller="PricingIcon">
      <defs>
        <path id="pricingIconTag" d="M41.4 30.38l8.4 8.27A4 4 0 0 1 51 41.5V62a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V41.5a4 4 0 0 1 1.2-2.85l8.4-8.27a2 2 0 0 1 2.8 0zM40 36a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        <clipPath id="pricingClipPath">
          <use href="#pricingIconTag" style={{ transformOrigin: '40px 39px', transform: 'rotate(45deg)' }} data-js-target-list="PricingIcon.tagBacks" />
        </clipPath>
      </defs>
      <use href="#pricingIconTag" fill='#ffd848' style={{ transformOrigin: '40px 39px', transform: 'rotate(45deg)' }} data-js-target-list="PricingIcon.tagBacks" />
      <use className="PricingIcon__tag" href="#pricingIconTag" fill='#fb0' style={{ transformOrigin: '40px 39px' }} data-js-target-list="PricingIcon.tagFronts" />
      <g clipPath="url(#pricingClipPath)">
        <use className="PricingIcon__tag" href="#pricingIconTag" fill='#ff7600' style={{ transformOrigin: '40px 39px' }} data-js-target-list="PricingIcon.tagFronts" />
      </g>
    </svg>,
  },
];

export default sublinks;
