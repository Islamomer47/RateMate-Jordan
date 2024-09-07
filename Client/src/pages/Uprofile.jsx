import React, { useState, useRef, useEffect } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "islam omar",
    username: "@IslamOmar",
    email: "islam@gmail.com",
    phone: "0797615337",
    dob: "April 12, 2003",
    location: "Alzarqa, JORDAN",
    occupation: "Full-Stack Developer",
    bio: "Web Developer & Designer",
    profilePicture:
      "https://img.freepik.com/premium-photo/image-icon-picpeople-filled-dark-black-waves-background_873925-1300057.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    coverPicture: "https://via.placeholder.com/800x200",
  });

  const editModalRef = useRef(null);
  const changePasswordModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        editModalRef.current &&
        !editModalRef.current.contains(event.target)
      ) {
        setIsEditing(false);
      }
      if (
        changePasswordModalRef.current &&
        !changePasswordModalRef.current.contains(event.target)
      ) {
        setIsChangingPassword(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Normally, you would send updated data to the backend here.
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (
      (name === "profilePicture" || name === "coverPicture") &&
      files.length > 0
    ) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          [name]: reader.result,
        });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setProfileData({
        ...profileData,
        [name]: value,
      });
    }
  };

  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    // Handle password change logic here
    setIsChangingPassword(false);
  };

  return (
    <div className="bg-[#FADED9] min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Cover Photo */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={profileData.coverPicture}
            alt="Cover"
          />
          <button
            className="absolute top-4 right-4 bg-[#060640] text-[#FADED9] px-4 py-2 rounded-full hover:bg-[#515161] transition"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative -mt-16 flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-[#FADED9] shadow-lg"
            src={profileData.profilePicture}
            alt="Profile"
          />
          <div className="text-center mt-4">
            <h2 className="text-4xl font-bold text-[#060640]">
              {profileData.name}
            </h2>
            <p className="text-xl font-medium text-[#515161]">
              {profileData.username}
            </p>
            <p className="mt-2 text-[#515161]">{profileData.bio}</p>
            <button
              className="bg-[#060640] text-[#FADED9] px-6 py-2 rounded-full mt-4 hover:bg-[#515161] transition"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* About */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-[#515161]">
            <h3 className="text-[#060640] text-2xl font-semibold mb-4">
              About
            </h3>
            <p>
              <strong>Email:</strong> {profileData.email}
            </p>
            <p>
              <strong>Phone:</strong> {profileData.phone}
            </p>
            <p>
              <strong>Date of Birth:</strong> {profileData.dob}
            </p>
            <p>
              <strong>Location:</strong> {profileData.location}
            </p>
            <p>
              <strong>Occupation:</strong> {profileData.occupation}
            </p>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-[#515161]">
            <h3 className="text-[#060640] text-2xl font-semibold mb-4">
              Recent Activities
            </h3>
            <ul className="space-y-4">
              <li className="p-4 bg-[#F4F4F4] rounded-lg shadow-sm">
                <p className="text-[#515161]">
                  Posted a new blog article on React and Tailwind CSS
                </p>
                <small className="text-[#515161]">2 hours ago</small>
              </li>
              <li className="p-4 bg-[#F4F4F4] rounded-lg shadow-sm">
                <p className="text-[#515161]">Commented on a friend's photo</p>
                <small className="text-[#515161]">5 hours ago</small>
              </li>
              <li className="p-4 bg-[#F4F4F4] rounded-lg shadow-sm">
                <p className="text-[#515161]">
                  Joined a new group "Web Developers"
                </p>
                <small className="text-[#515161]">1 day ago</small>
              </li>
            </ul>
          </div>

          {/* Achievements & Preferences */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 border border-[#515161]">
            {/* Achievements */}
            <div className="p-6">
              <h3 className="text-[#060640] text-2xl font-semibold mb-4">
                Achievements
              </h3>
              <ul className="space-y-4">
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Top Contributor Award - 2023
                </li>
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  1000 Followers Milestone
                </li>
              </ul>
            </div>

            {/* Preferences */}
            <div className="p-6">
              <h3 className="text-[#060640] text-2xl font-semibold mb-4">
                User Preferences
              </h3>
              <ul className="space-y-4">
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Email Notifications: Enabled
                </li>
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Theme: Dark
                </li>
              </ul>
            </div>
          </div>

          {/* Followers & Following */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 border border-[#515161]">
            {/* Followers */}
            <div>
              <h3 className="text-[#060640] text-2xl font-semibold mb-4">
                Followers
              </h3>
              <ul className="space-y-4">
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Jane Smith
                </li>
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Mark Johnson
                </li>
              </ul>
            </div>

            {/* Following */}
            <div>
              <h3 className="text-[#060640] text-2xl font-semibold mb-4">
                Following
              </h3>
              <ul className="space-y-4">
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Emily Brown
                </li>
                <li className="bg-[#F4F4F4] p-4 rounded-lg shadow-sm">
                  Michael Davis
                </li>
              </ul>
            </div>
          </div>

          {/* Interaction Options */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#515161]">
            <div className="flex space-x-4">
              <button className="flex-1 bg-[#060640] text-[#FADED9] py-2 rounded-lg hover:bg-[#515161] transition">
                Send Message
              </button>
              <button className="flex-1 bg-[#060640] text-[#FADED9] py-2 rounded-lg hover:bg-[#515161] transition">
                Follow
              </button>
              <button className="flex-1 bg-[#060640] text-[#FADED9] py-2 rounded-lg hover:bg-[#515161] transition">
                Connect
              </button>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm mt-6 border border-[#515161]">
            <h3 className="text-[#060640] text-2xl font-semibold mb-4">
              Settings
            </h3>
            <div className="flex space-x-4">
              <button
                className="flex-1 bg-[#060640] text-[#FADED9] py-2 rounded-lg hover:bg-[#515161] transition"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
              <button className="flex-1 bg-[#060640] text-[#FADED9] py-2 rounded-lg hover:bg-[#515161] transition">
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto relative">
            <h3 className="text-[#060640] text-2xl font-semibold mb-4">
              Edit Profile
            </h3>
            <form onSubmit={handleSave}>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Cover Photo</label>
                <div className="relative">
                  <input
                    type="file"
                    name="coverPicture"
                    accept="image/*"
                    onChange={handleChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <img
                    className="w-full h-32 object-cover rounded-lg border border-[#515161]"
                    src={profileData.coverPicture}
                    alt="Cover Preview"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">
                  Profile Picture
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <img
                    className="w-32 h-32 rounded-full border-4 border-[#FADED9]"
                    src={profileData.profilePicture}
                    alt="Profile Preview"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={profileData.occupation}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-[#FADED9] text-[#060640] py-2 px-4 rounded-lg hover:bg-[#515161] transition"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#060640] text-[#FADED9] py-2 px-4 rounded-lg hover:bg-[#515161] transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto relative">
            <h3 className="text-[#060640] text-2xl font-semibold mb-4">
              Change Password
            </h3>
            <form onSubmit={handlePasswordSave}>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#060640] mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmNewPassword"
                  className="w-full p-2 border border-[#515161] rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-[#FADED9] text-[#060640] py-2 px-4 rounded-lg hover:bg-[#515161] transition"
                  onClick={() => setIsChangingPassword(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#060640] text-[#FADED9] py-2 px-4 rounded-lg hover:bg-[#515161] transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
