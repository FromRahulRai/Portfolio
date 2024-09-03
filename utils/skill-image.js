import node from "/public/svg/skills/node.svg";
import github from "/public/svg/skills/github.svg";
import express from "/public/svg/skills/express.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import css from "/public/svg/skills/css.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import materialui from "/public/svg/skills/materialui.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import vitejs from "/public/svg/skills/vitejs.svg";
import wordpress from "/public/svg/skills/wordpress.svg";
import shopify from "/public/svg/skills/shopify.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "wordpress":
      return wordpress;
    case "shopify":
      return shopify;
    case "node":
      return node;
    case "github":
      return github;
    case "express":
      return express;
    default:
      break;
  }
};
