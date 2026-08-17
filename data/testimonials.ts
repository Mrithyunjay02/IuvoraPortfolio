export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectId?: string;
}

/**
 * Verified Client Testimonials Architecture
 * 
 * Strict Guideline: Only genuine client testimonials provided by real stakeholders
 * should be added here. No placeholder or fabricated reviews.
 */
export const TESTIMONIALS: Testimonial[] = [];
