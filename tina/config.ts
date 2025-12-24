import { defineConfig } from "tinacms";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  branch: "main",
  clientId: isLocal ? null : process.env.VITE_TINA_CLIENT_ID,
  token: isLocal ? null : process.env.VITE_TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "newsletter",
        label: "Newsletters",
        path: "content/newsletters",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `issue-${values?.issueNumber?.toString().padStart(2, '0') || 'new'}`;
            },
          },
        },
        fields: [
          {
            type: "number",
            name: "issueNumber",
            label: "Issue Number",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Newsletter Title",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "featuredParadigms",
            label: "Featured Paradigms",
            required: false,
            list: true,
            options: ["drug", "cyber", "robo", "mental-health", "nutraceuticals", "crystal"],
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
            required: false,
          },
          {
            type: "string",
            name: "pdfUrl",
            label: "PDF URL (Google Drive)",
            required: false,
          },
          {
            type: "object",
            name: "highlights",
            label: "Highlights",
            list: true,
            fields: [
              {
                type: "string",
                name: "paradigmId",
                label: "Paradigm ID",
                required: false,
                options: ["drug", "cyber", "robo", "mental-health", "nutraceuticals", "crystal"],
              },
              {
                type: "string",
                name: "title",
                label: "Highlight Title",
                required: false,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "points",
                label: "Key Points",
                list: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
