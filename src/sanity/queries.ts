import { groq } from "next-sanity";

export const getAllProjects = groq`*[_type == "project"] | order(order asc)`;

export const getAllSkills = groq`*[_type == "skill"]`;

export const getAllTestimonials = groq`*[_type == "testimonial"]`;

export const getAbout = groq`*[_type == "about"][0]`;

export const getSiteSettings = groq`*[_type == "siteSettings"][0]`;
