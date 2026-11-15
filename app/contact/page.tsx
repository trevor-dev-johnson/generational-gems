import type { Metadata } from "next";
import { HeartHandshake, Instagram, Mail } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the makers at Generational Gems." };
export default function ContactPage() { return <div className="contact-page"><header className="page-hero"><p className="script">We’d love to hear from you</p><h1>Come say <em>hello.</em></h1><p>Questions, ideas, or a kind note—we’re all ears. Use the form to continue in your email app.</p></header><section className="contact-layout section-pad"><div className="contact-aside"><h2>Let’s connect</h2><p>Contact details and social accounts are placeholders until the owners provide their launch information.</p><div><Mail aria-hidden="true"/><span><b>Email</b>hello@example.com</span></div><div><Instagram aria-hidden="true"/><span><b>Social</b>Coming before launch</span></div><div><HeartHandshake aria-hidden="true"/><span><b>Response time</b>To be confirmed</span></div></div><InquiryForm/></section></div>; }
