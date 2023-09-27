// import React from "react";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BsInstagram, BsMeta } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";

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
    path: "/",
  },
  {
    title: "Menu",
    path: "/",
  },
  {
    title: "Reservation",
    path: "/",
  },
  {
    title: "Gallery",
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
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
