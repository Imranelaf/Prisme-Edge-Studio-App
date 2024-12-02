import { NextConfig } from "next";
/* 
Next.js enforces strict domain configuration for external images when using the next/image component.
This policy ensures:
- Security: Only trusted domains are allowed, preventing abuse from untrusted sources.
- Performance: Next.js optimizes images by resizing, compressing, and serving them in modern formats
  like WebP. To do this, it needs explicit permission to handle images from specific domains.
By adding the domain 'i.ibb.co' to images.domains in this file, we gave Next.js permission 
to optimize images hosted on this domain.
*/
const nextConfig: NextConfig = {
  images: {
    domains: ['i.ibb.co', "cdn.pixabay.com", 'images.unsplash.com', "lh3.googleusercontent.com"], // Allow images from i.ibb.co and pixabay
  },
};
export default nextConfig;
