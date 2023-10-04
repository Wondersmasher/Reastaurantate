// import React from "react";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BsInstagram, BsMeta } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
// import img1 from "./images/sideimg.png";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
export const icons = [
  {
    icon: (
      <CiLocationOn className="text-white text-[40px] p-2 rounded-full bg-black" />
    ),
    title: "Locate Us",
    text: "Riverside 25, San Francisco",
  },
  {
    icon: (
      <IoTimerOutline className="text-white text-[40px] p-2 rounded-full bg-black" />
    ),
    title: "Open Hours",
    text: "Mon To Fri 9:00 AM - 9:00 PM",
  },
  {
    icon: (
      <MdOutlineNoteAdd className="text-white text-[40px] p-2 rounded-full bg-black" />
    ),
    title: "Reservation",
    text: "hirestaurantate@gmail.com",
  },
];

export const menus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Menu",
    path: "/menu",
  },
  {
    title: "Reservation",
    path: "/reservation",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const menuIcons = [
  {
    logo: (
      <FaXTwitter className="text-white md:text-icon-sm  lg:text-icon-md   hidden md:block" />
    ),
    path: "",
  },
  {
    logo: (
      <BsMeta className="text-white md:text-icon-sm  lg:text-icon-md  hidden md:block" />
    ),
    path: "",
  },
  {
    logo: (
      <BsInstagram className="text-white md:text-icon-sm  lg:text-icon-md   hidden md:block" />
    ),
    path: "",
  },
  {
    logo: (
      <BiLogoPinterestAlt className="text-white md:text-icon-sm  lg:text-icon-md hidden md:block" />
    ),
    path: "",
  },
];

export const menuData = [
  {
    title: "Starter",
    data: [
      {
        img: img1,
        title: "Raw Scallops from Erquy",
        text: "Candied Jerusalem artichokes, truffle",
        price: "40",
      },
      {
        img: img1,
        title: "Spring Roll",
        text: "Candied Jerusalem artichokes, truffle ",
        price: "20",
      },
      {
        img: img1,
        title: "French Onion Soup",
        text: "Candied Jerusalem artichokes, truffle ",
        price: "20",
      },
      {
        img: img1,
        title: "Tomato Brushetta",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
    ],
  },
  {
    title: "Main Dish",
    data: [
      {
        img: img1,
        title: "Grilled Salmon with Dil Sauce",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
      {
        img: img1,
        title: "Roast Beef with Vegetable",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
      {
        img: img1,
        title: "Marrkesh Vegetarian Curry",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
      {
        img: img1,
        title: "Spicy Vegan Potato Curry",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
    ],
  },
  {
    title: "Desert",
    data: [
      {
        img: img1,
        title: "Apple Pie with Cream",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
      {
        img: img1,
        title: "Lemon Merigue Pie",
        text: "Candied Jerusalem artichokes, truffle",
        price: "20",
      },
    ],
  },
];

export const popularDishes = [
  {
    title: "Chicken Manjoori",
    img: img1,
    text: "Lorem ipsum dolor sit amet consectetur",
    price: "15",
  },
  {
    title: "Chicken Manjoori",
    img: img2,
    text: "Lorem ipsum dolor sit amet consectetur",
    price: "15",
  },
  {
    title: "Chicken Manjoori",
    img: img3,
    text: "Lorem ipsum dolor sit amet consectetur",
    price: "15",
  },
  {
    title: "Chicken Manjoori",
    img: img4,
    text: "Lorem ipsum dolor sit amet consectetur",
    price: "15",
  },
];
