import { Link } from 'react-router-dom';
import { LegalPage } from './LegalPage';
import { company } from '../data/company';

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms and Conditions" path="/terms-and-conditions" updated="23 October 2026 (draft)" description="Terms governing the use of the Indoyug Clean Tech LLP website."
      sections={[
        { id: 'use', title: 'Use of this website', body: <p>By using this website you agree to these terms. The website is provided by {company.name} for information about our products and services and to receive business enquiries.</p> },
        { id: 'ip', title: 'Intellectual property', body: <p>The Indoyug name and logo, text, product information, images and documents on this website belong to {company.name} or its licensors. You may download product sheets and the brochure for evaluating our products; other reproduction requires our written permission.</p>, review: true },
        { id: 'product-info', title: 'Product information', body: <p>Product descriptions and specifications are provided for general information and reflect standard configurations as published in our brochure. Products may be customised and specifications may change. Binding specifications are those stated in a written quotation or order confirmation. Images may show optional features or representative configurations.</p>, review: true },
        { id: 'quotations', title: 'Quotations and orders', body: <p>No prices are published on this website and nothing on it is an offer to sell. Submitting an enquiry does not create a contract. Quotations are issued in writing and are governed by the terms stated in them. <Link to="/request-a-quote" className="link">Request a quotation</Link>.</p>, review: true },
        { id: 'links', title: 'Third-party links', body: <p>This website may link to third-party sites, such as Google Maps. We are not responsible for their content or practices.</p> },
        { id: 'disclaimer', title: 'Disclaimer', body: <p>Technical articles on this website are general editorial content and not professional or certified technical advice. Equipment selection for regulated or hazardous applications should be confirmed by your qualified quality, safety and engineering personnel.</p>, review: true },
        { id: 'liability', title: 'Limitation of liability', body: <p>To the extent permitted by law, {company.name} is not liable for losses arising from use of, or reliance on, information on this website. Nothing in these terms limits liability that cannot be limited by law.</p>, review: true },
        { id: 'law', title: 'Governing law', body: <p>These terms are governed by the laws of India. Jurisdiction is to be confirmed by the company’s legal adviser.</p>, review: true },
        { id: 'contact', title: 'Contact', body: <p>Questions about these terms: <a className="link" href={`mailto:${company.email}`}>{company.email}</a>.</p> },
      ]} />
  );
}
