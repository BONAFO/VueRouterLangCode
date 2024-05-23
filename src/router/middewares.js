import { ava_langs } from "./routes.params";

// VALID LANGUAGE
export const language_middleware = (to, next) => {
  // const lang = to.params.lang;
  // if (ava_langs.indexOf(lang.toLowerCase()) == -1) {
  //   next({ path: "/en/" });
  // }
  const lang = to.params.lang;
  if (ava_langs.indexOf(lang.toLowerCase()) == -1) {
    const restOfPath = to.fullPath.replace(`/${lang}`, '');
    next({ path: `/en${restOfPath}` });
  }

};

// VALIDATE SAVEGAME
export const savegame_middleware = (to, next) => {
  const lang = to.params.lang;
  if (sessionStorage.getItem("save") == null) {
    next({ path: `/${lang}/` });
  }
};

export const IS_MOBILE = () => {
  const width = window.innerWidth;
  if (width <= 768) {
    return "mob";
  }
  return "desk";
};

export const disclaim_middleware = (to, next) => {
  const lang = to.params.lang;
  if (sessionStorage.getItem("disclaim") == null) {
    sessionStorage.setItem("origin", "/"+ window.location.hash);
    next({ path: `/${lang}/disclaim` });
  }
};
