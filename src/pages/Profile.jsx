import React, { useState } from "react";
import {
  FaVk,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaOdnoklassniki,
} from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const Profile = () => {
  const [editingPhone, setEditingPhone] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [phone, setPhone] = useState("+7 911 564-86-86");
  const [email, setEmail] = useState("person@mail.ru");
  const [name, setName] = useState("Константин Константинопольский");
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const savePhone = () => setEditingPhone(false);
  const saveEmail = () => setEditingEmail(false);
  const saveName = () => setEditingName(false);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deleteProfilePicture = () => {
    setProfilePicture(null);
  };

  return (
    <div className="max-w-4xl container  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl p-6 my-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Личный кабинет</h1>
        <nav className="text-gray-500">
          <a href="#" className="hover:underline">
            Главная
          </a>{" "}
          &gt; <span>Личный кабинет</span>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
        <div className="relative mb-6 md:mb-0">
          <div className="w-32 h-32 bg-green-200 rounded-full flex items-center justify-center text-4xl font-bold text-green-500 overflow-hidden">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              "K"
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="hidden"
            id="profilePictureUpload"
          />
          <label
            htmlFor="profilePictureUpload"
            className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 bg-white p-1 rounded-full shadow-md border border-gray-200 cursor-pointer"
          >
            <FiEdit2 className="text-green-500" />
          </label>
          {profilePicture && (
            <button
              onClick={deleteProfilePicture}
              className="absolute bottom-0 right-0 transform translate-x-12 translate-y-2 bg-white p-1 rounded-full shadow-md border border-gray-200 text-red-500"
            >
              <FiTrash2 />
            </button>
          )}
          {profilePicture && (
            <span className="absolute bottom-0 right-0 transform translate-x-12 translate-y-10 text-red-500 text-sm">
              Удалить фото
            </span>
          )}
        </div>
        <div className="md:ml-6 gap-10">
          {editingName ? (
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="border-b border-gray-300 focus:outline-none text-2xl font-bold"
              />
              <button
                onClick={saveName}
                className="ml-2 text-green-500 focus:outline-none"
              >
                Сохранить
              </button>
            </div>
          ) : (
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">{name}</h2>
              <FiEdit2
                onClick={() => setEditingName(true)}
                className="ml-2 text-green-500 cursor-pointer"
              />
            </div>
          )}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-blue-500">
              <FaVk />
            </a>
            <a href="#" className="text-blue-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-orange-500">
              <FaOdnoklassniki />
            </a>
          </div>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 focus:outline-none">
            Изменить персональную информацию
          </button>
          <div className="flex flex-col md:flex-row md:space-x-8 mt-4">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="mr-2">Телефон:</span>
              {editingPhone ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="border-b border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={savePhone}
                    className="ml-2 text-green-500 focus:outline-none"
                  >
                    Сохранить
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="font-bold">{phone}</span>
                  <FiEdit2
                    onClick={() => setEditingPhone(true)}
                    className="ml-2 text-green-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center">
              <span className="mr-2">Email:</span>
              {editingEmail ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className="border-b border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={saveEmail}
                    className="ml-2 text-green-500 focus:outline-none"
                  >
                    Сохранить
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="font-bold">{email}</span>
                  <FiEdit2
                    onClick={() => setEditingEmail(true)}
                    className="ml-2 text-green-500 cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Данные о плательщике</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-bold">Название компании</p>
              <p>ИНН 9717039181</p>
            </div>
            <FiEdit2 className="text-green-500 cursor-pointer" />
          </div>
          {/* Add more fields as necessary */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
