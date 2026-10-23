import { LegalPage } from './LegalPage';
import { company } from '../data/company';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" updated="23 October 2026 (draft)" description="How Indoyug Clean Tech LLP collects, uses and protects personal data submitted through this website."
      sections={[
        { id: 'who', title: 'Who we are', body: <p>This website is operated by {company.name}, {company.addressOneLine} (“Indoyug”, “we”, “us”). Contact: <a className="link" href={`mailto:${company.email}`}>{company.email}</a>.</p> },
        { id: 'collect', title: 'Data we collect through forms', body: <><p>When you submit an enquiry, contact or quote form we collect the details you provide: name, company, business email, phone number, city and country, product interest, quantity, project type, specifications, timeline, message and any file you upload (for example technical drawings).</p><p>We also record the page the form was submitted from and the time it took to complete, to help detect automated spam.</p></> },
        { id: 'use', title: 'How we use your data', body: <p>We use your details to respond to your enquiry, prepare quotations, and communicate with you about the products or project you asked about. We do not sell your personal data.</p>, review: true },
        { id: 'legal-basis', title: 'Legal basis and applicable law', body: <p>We process enquiry data with your consent, given via the consent checkbox, and to take steps at your request before entering into a contract. Obligations under India’s Digital Personal Data Protection Act, 2023 and its rules, and any other applicable law, are to be confirmed by the company’s legal adviser.</p>, review: true },
        { id: 'analytics', title: 'Usage analytics and cookies', body: <p>This website does not currently set analytics or advertising cookies. If analytics are added (for example Google Analytics), this section will be updated to describe the tool, the data collected and how to opt out, and a consent mechanism will be added where required.</p>, review: true },
        { id: 'third-parties', title: 'Third-party services', body: <p>The contact page embeds Google Maps, which is provided by Google and subject to Google’s privacy policy. Enquiry submissions are processed by our website hosting and email providers acting on our behalf. The list of processors will be confirmed before launch.</p>, review: true },
        { id: 'retention', title: 'Data retention', body: <p>We keep enquiry data for as long as needed to respond and to maintain business records, after which it is deleted or anonymised. The specific retention period is to be set by the company.</p>, review: true },
        { id: 'security', title: 'Security', body: <p>Forms are submitted over encrypted HTTPS connections. Access to enquiry data is limited to staff who need it to respond. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p> },
        { id: 'rights', title: 'Your rights', body: <p>You may ask to access, correct or delete the personal data we hold about you, or withdraw consent, by emailing <a className="link" href={`mailto:${company.email}`}>{company.email}</a>. Grievance officer details, if required by law, will be added here.</p>, review: true },
        { id: 'changes', title: 'Changes to this policy', body: <p>We may update this policy. The “last updated” date at the top shows when it last changed.</p> },
      ]} />
  );
}
