import client from "../../tina/__generated__/client";

export interface Newsletter {
  id: string;
  issueNumber: number;
  title: string;
  publishDate: string;
  summary: string;
  featuredParadigms: string[];
  highlights?: {
    paradigmId: string;
    title: string;
    description: string;
    points: string[];
  }[];
  coverImage?: string;
  pdfUrl?: string;
}

export const fetchNewsletters = async (): Promise<Newsletter[]> => {
  try {
    const response = await client.queries.newsletterConnection();
    const newsletters = response.data.newsletterConnection.edges?.map((edge) => {
      const node = edge?.node;
      return {
        id: node?._sys?.filename || "",
        issueNumber: node?.issueNumber || 0,
        title: node?.title || "",
        publishDate: node?.publishDate || "",
        summary: node?.summary || "",
        featuredParadigms: node?.featuredParadigms || [],
        highlights: node?.highlights as any || [],
        coverImage: node?.coverImage || "",
        pdfUrl: node?.pdfUrl || "",
      };
    }) || [];
    return newsletters;
  } catch (error) {
    console.error("Error fetching newsletters:", error);
    return [];
  }
};

// Backward compatibility - initialize with empty array
export let newsletters: Newsletter[] = [];

export const getNewsletterById = (id: string) => newsletters.find(n => n.id === id);

// Load newsletters on import
fetchNewsletters().then(data => {
  newsletters = data;
}).catch(err => {
  console.error("Failed to initialize newsletters:", err);
});
