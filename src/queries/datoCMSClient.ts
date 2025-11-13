// src/queries/datoCMSClient.ts
// Stubbed DatoCMS client (no real API calls needed)

export default {
  request: async (_query: string) => {
    console.warn("DatoCMS client disabled — returning empty mock data.");
    return {};
  },
};
