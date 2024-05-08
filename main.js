import './style.css'
import { account } from './appwrite'

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const profileScreen = document.getElementById("profile-screen");
const loginScreen = document.getElementById("login-screen");


export async function handleLogin (){
  console.log("Creating session...")
  account.createOAuth2Session(
    'google',
    'http://localhost:5173/',
    'http://localhost:5173/fail'
  );
  return await getUser();
}
export async function getUser (){
  try {
    const user = await account.get();
    return user.name;
  }
  catch(error) {
    return error;
  }
}
function renderLoginScreen () {
  loginScreen.classList.remove('hidden')
}
async function renderProfileScreen (user) {
  document.getElementById("user-name").textContent = user.name;
  renderProfileScreen.classList.remove('hidden')
}
