import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  const defaultTitle = 'Flower House Creche Care (FHCC)';
  const defaultDescription = 'Flower House Creche Care is a licensed, highly structured, and child-centered creche in Ikorodu, providing an exceptionally safe and natural environment for early education.';
  const defaultKeywords = 'child care, creche, nursery, pre-nursery, ikorodu, school, early education, FHCC';

  return (
    <Helmet>
      <title>{title ? `${title} | FHCC` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | FHCC` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="Flower House Creche Care" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | FHCC` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
}
