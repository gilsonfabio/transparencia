import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

import { useTheme } from 'next-themes'

import {  FaInfoCircle } from 'react-icons/fa';
import {  FaFacebook } from 'react-icons/fa';
import {  FaInstagram } from 'react-icons/fa';
import {  FaYoutube } from 'react-icons/fa';
import {  FaAdjust } from 'react-icons/fa';
import {  FaHandsWash } from 'react-icons/fa';
import {  FaEllipsisV } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function DropdownIcons() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);  
  const {theme, setTheme} =  useTheme();
  
  useEffect(() => {
    setMounted(true);    
    localStorage.setItem('atualTheme', theme);
  },[theme]);

  if(!mounted) return null

  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">              
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <button className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium" onClick={() => {}}></button>
                  <a target="_blank" href="#" className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium"><FaInfoCircle className="w-4 h-4 fa-solid fa-circle-info"/></a>
                  <a target="_blank" href="https://www.facebook.com/PrefAparecida/" className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium"><FaFacebook className="w-4 h-4 fa-solid fa-circle-info"/></a>
                  <a target="_blank" href="https://www.instagram.com/prefaparecida/" className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium"><FaInstagram className="w-4 h-4 fa-solid fa-circle-info"/></a>
                  <a target="_blank" href="https://www.youtube.com/channel/UC-YvAQ4nT9_sewdzsp1zWjw" className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium"><FaYoutube className="w-4 h-4 fa-solid fa-circle-info"/></a>
                  <button className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><FaAdjust className="w-4 h-4 fa-solid fa-circle-info"/></button>
                  <a href="#" className="text-white hover:text-gray-400 px-1 py-2 text-sm font-medium"><FaHandsWash className="w-4 h-4 fa-solid fa-circle-info"/></a>
                </div>
              </div>
            </div>
            <div className="-mr-0 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-light "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FaEllipsisV className="w-5 h-5 fa-solid"/>
                ) : (
                  <FaTimes className="w-5 h-5 fa-solid"/>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen }
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="bg-black rounded-b-lg origin-center absolute px-2 py-0 w-12 mx-3 z-20 flex flex-col">
                <a href="#" className="bg-black text-white hover:text-gray-400 px-2 py-3 text-sm font-medium"><FaInfoCircle className="w-5 h-5 fa-solid fa-circle-info"/></a>
                <a target="_blank" href="https://www.facebook.com/PrefAparecida/" className="bg-black text-white hover:text-gray-400 px-2 py-3 text-sm font-medium"><FaFacebook className="w-5 h-5 fa-solid fa-circle-info"/></a>
                <a target="_blank" href="https://www.instagram.com/prefaparecida/" className="bg-black text-white hover:text-gray-400 px-2 py-3 text-sm font-medium" ><FaInstagram className="w-5 h-5 fa-solid fa-circle-info"/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UC-YvAQ4nT9_sewdzsp1zWjw" className="bg-black text-white hover:text-gray-400 px-2 py-3 text-sm font-medium" ><FaYoutube className="w-5 h-5 fa-solid fa-circle-info"/></a>
                <button className="bg-black text-white hover:text-gray-400 px-2 py-3 text-sm font-medium" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><FaAdjust className="w-5 h-5 fa-solid fa-circle-info"/></button>
                <a href="#" className="bg-black text-white hover:text-gray-400 px-2 py-3 rounded-b-lg text-sm font-medium"><FaHandsWash className="w-5 h-5 fa-solid fa-circle-info"/></a>
              </div>
            </div>
          )}
        </Transition>
      </nav>      
    </div>
  );
}

export default DropdownIcons;