import Cookie from "js-cookie";

export const SetCookie = (
  cookieName: string,
  cookie: string,
  remember: boolean
) => {
  Cookie.set(cookieName, cookie, {
    expires: remember ? 7 : undefined,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export const GetCookie = (cookieName: string) => {
  return Cookie.get(cookieName);
};

export const RemoveCookie = (cookieName: string) => {
  Cookie.remove(cookieName);
};
