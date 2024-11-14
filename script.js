"use strict";

const searchButton = document.querySelector(".search_btn");
const inputField = document.querySelector("input");
const card = document.querySelector(".card");
const username = document.querySelector(".username");
const dateJoined = document.querySelector(".date");
const user = document.querySelector(".user");
const bio = document.querySelector(".bio");
const noOfRepository = document.querySelector(".repository_quantity");
const followers = document.querySelector(".no_of_followers");
const following = document.querySelector(".no_of_following");
const city = document.querySelector(".city");
const profileLink = document.querySelector(".link");
const twitterProfile = document.querySelector(".twitter_profile");
const companyName = document.querySelector(".company_name");
const userAvartar = document.querySelector(".avartar");
const searchError = document.querySelector(".search_error");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");
const theme = document.querySelector(".state");
const title = document.querySelector(".title");
const searchbox = document.querySelector(".searchbox");
const userDetails = document.querySelector(".user_details");
const repository = document.querySelector(".repository");
const followersCount = document.querySelector(".fans");
const followingCount = document.querySelector(".following");
const locationImage = document.querySelector(".location");
const link = document.querySelector(".link");
const mobileSearchButton = document.querySelector(".mobile_search_btn");
const mobileInputField = document.querySelector(".mobile_input");
const mobileAvartar = document.querySelector(".mobile_avartar");
const mobileName = document.querySelector(".mobile_name");
const mobileUsername = document.querySelector(".mobile_username");
const mobileDateJoined = document.querySelector(".mobile_date");
const mobileBio = document.querySelector(".bio_detail");
const mobileRepositoryQuantity = document.querySelector(".mobile_repository_quantity");
const mobileFollowers = document.querySelector(".mobile_no_of_followers");
const mobileFollowings = document.querySelector(".mobile_no_of_following");
const mobileLocation = document.querySelector(".mobile_location");
const mobileTwitterProfile = document.querySelector(".mobile_twitter_profile");
const mobileCompanyName = document.querySelector(".mobile_company");
const mobileUserDetailsWrapper = document.querySelector(".mobile_user_details_wrapper");
const mobileRepo = document.querySelector(".mobile_repository");
const mobileRepoQuantity = document.querySelector(".mobile_repository_quantity");
const mobileFollower = document.querySelector(".mobile_fans");
const mobileFollowersCount = document.querySelector(".mobile_no_of_followers");
const mobileFollowing = document.querySelector(".mobile_following");
const mobileFollowingCount = document.querySelector(".mobile_no_of_following");
const mobileSearchError = document.querySelector(".mobile_search_error");
let clicked = true;

searchButton.addEventListener("click", () => {
  let originalName = inputField.value.toLowerCase();

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users/${originalName}`);
      inputField.value = "";

      if (!response.ok) {
        throw new Error("Could not fetch response");
      }
      card.style.display = "block";
      const data = await response.json();
      const date = new Date(data.created_at);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      dateJoined.textContent = `Joined ${day} ${month} ${year}`;
      console.log(date);
      console.log(data);
      const userImage = data.avatar_url;
      userAvartar.src = userImage;
      userAvartar.style.display = "block";
      username.textContent = data.name;
      user.textContent = `@${data.login}`;
      bio.textContent = data.bio ?? "This profile has no bio";
      noOfRepository.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      city.textContent = data.location ?? "Not Found";
      twitterProfile.textContent = data.twitter_username ?? "Not Found";
      companyName.textContent = data.company ?? "Not Found";
    } catch (error) {
      searchError.style.display = "block";
      console.error(error);
    }
  }
  fetchData();
});

mobileSearchButton.addEventListener("click", () => {
  let mobileOriginalName = mobileInputField.value;

  async function mobileFetchData() {
    try {
      const mobileResponse = await fetch(`https://api.github.com/users/${mobileOriginalName}`);
      mobileInputField.value = "";

      if (!mobileResponse.ok) {
        throw new Error("Could not fetch response");
      }
      mobileSearchError.style.display = "none";
      card.style.display = "block";
      const mobileData = await mobileResponse.json();
      console.log(mobileData);
      const mobileUserImage = mobileData.avatar_url;
      mobileAvartar.src = mobileUserImage;
      mobileAvartar.style.display = "block";
      mobileName.textContent = mobileData.name;
      mobileUsername.textContent = `@${mobileData.login}`;
      const date = new Date(mobileData.created_at);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      mobileDateJoined.textContent = `Joined ${day} ${month} ${year}`;
      mobileBio.textContent = mobileData.bio ?? "This user has no bio";
      mobileRepositoryQuantity.textContent = mobileData.public_repos;
      mobileFollowers.textContent = mobileData.followers;
      mobileFollowings.textContent = mobileData.following;
      mobileLocation.textContent = mobileData.location ?? "Not Available";
      mobileTwitterProfile.textContent = mobileData.twitter_username ?? "Not Available";
      mobileCompanyName.textContent = mobileData.company ?? "Not Available";
    } catch (error) {
      card.style.display = "none";
      mobileSearchError.style.display = "block";
      console.error(error);
    }
  }
  mobileFetchData();
});

moon.addEventListener("click", () => {
  if (clicked) {
    body.style.backgroundColor = "var(--PURPLE)";
    moon.src = "./assets/icon-sun.svg";
    theme.textContent = "LIGHT";
    theme.style.color = "var(--WHITE)";
    title.style.color = "var(--WHITE)";
    card.style.backgroundColor = "var(--DEEP_BLUE)";
    searchbox.style.backgroundColor = "var(--DEEP_BLUE)";
    inputField.classList.add("styled");
    mobileInputField.classList.add("mobile_styled");
    username.style.color = "var(--WHITE)";
    mobileName.style.color = "var(--WHITE)";
    dateJoined.style.color = "var(--WHITE)";
    mobileDateJoined.style.color = "var(--WHITE)";
    bio.style.color = "var(--WHITE)";
    mobileBio.style.color = "var(--WHITE)";
    userDetails.style.backgroundColor = "var(--PURPLE)";
    mobileUserDetailsWrapper.style.backgroundColor = "var(--PURPLE)";
    repository.style.color = "var(--WHITE)";
    mobileRepo.style.color = "var(--WHITE)";
    noOfRepository.style.color = "var(--WHITE)";
    mobileRepoQuantity.style.color = "var(--WHITE)";
    followersCount.style.color = "var(--WHITE)";
    mobileFollowersCount.style.color = "var(--WHITE)";
    followers.style.color = "var(--WHITE)";
    mobileFollower.style.color = "var(--WHITE)";
    followingCount.style.color = "var(--WHITE)";
    mobileFollowingCount.style.color = "var(--WHITE)";
    following.style.color = "var(--WHITE)";
    mobileFollowing.style.color = "var(--WHITE)";
    city.style.color = "var(--WHITE)";
    mobileLocation.style.color = "var(--WHITE)";
    twitterProfile.style.color = "var(--WHITE)";
    mobileTwitterProfile.style.color = "var(--WHITE)";
    link.style.color = "var(--WHITE)";
    companyName.style.color = "var(--WHITE)";
    mobileCompanyName.style.color = "var(--WHITE)";
    clicked = false;
  } else {
    body.style.backgroundColor = "var(--VERY_LIGHT_BLUE)";
    moon.src = "./assets/icon-moon.svg";
    theme.textContent = "DARK";
    theme.style.color = "var(--LIGHT_GRAY)";
    title.style.color = "var(--BLACK)";
    card.style.backgroundColor = "var(--LIGHT_WHITE)";
    searchbox.style.backgroundColor = "var(--LIGHT_WHITE)";
    inputField.classList.remove("styled");
    mobileInputField.classList.remove("mobile_styled");
    username.style.color = "var(--BLACK)";
    mobileName.style.color = "var(--BLACK)";
    dateJoined.style.color = "var(--LIGHT_GRAY)";
    mobileDateJoined.style.color = "var(--LIGHT_GRAY)";
    bio.style.color = "var(--GRAY)";
    mobileBio.style.color = "var(--GRAY)";
    userDetails.style.backgroundColor = "var(--VERY_LIGHT_BLUE)";
    mobileUserDetailsWrapper.style.backgroundColor = "var(--VERY_LIGHT_BLUE)";
    repository.style.color = "var(--GRAY)";
    mobileRepo.style.color = "var(--GRAY)";
    noOfRepository.style.color = "var(--BLACK)";
    mobileRepoQuantity.style.color = "var(--BLACK)";
    followersCount.style.color = "var(--GRAY)";
    mobileFollowersCount.style.color = "var(--BLACK)";
    followers.style.color = "var(--BLACK)";
    mobileFollower.style.color = "var(--GRAY)";
    followingCount.style.color = "var(--GRAY)";
    mobileFollowingCount.style.color = "var(--BLACK)";
    following.style.color = "var(--BLACK)";
    mobileFollowing.style.color = "var(--GRAY)";
    city.style.color = "var(--GRAY)";
    mobileLocation.style.color = "var(--GRAY)";
    twitterProfile.style.color = "var(--GRAY)";
    mobileTwitterProfile.style.color = "var(--GRAY)";
    link.style.color = "var(--GRAY)";
    companyName.style.color = "var(--GRAY)";
    mobileCompanyName.style.color = "var(--GRAY)";
    clicked = true;
  }
});
