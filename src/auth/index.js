import { Facebook__APPID } from "@env";

import * as Facebook from "expo-facebook";

const loginToFacebook = async () => {
  try {
    await Facebook.initializeAsync({
      appId: Facebook__APPID,
    });
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type == "success") {
      fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export { loginToFacebook };
