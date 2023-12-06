import { generatePath } from "react-router";

export const indexPattern = "/";
export const getIndexRoute = () => {
    return generatePath(indexPattern);
};

export const aboutPattern = "/about-us";
export const getAboutRoute = () => {
    return generatePath(aboutPattern);
};

export const industryPattern= "/industry";
export const getIndustryyRoute = () => {
    return generatePath(industryPattern);
};

export const contactPattern= "/contact";
export const getContactRoute = () => {
    return generatePath(contactPattern);
};

export const privacyPattern = "/privacy";
export const getPrivacyRoute = () => {
    return generatePath(privacyPattern);
};