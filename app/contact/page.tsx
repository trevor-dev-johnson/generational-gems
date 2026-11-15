import type { Metadata } from "next";
import { Facebook, HeartHandshake, Mail } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { contactEmail } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the makers at Generational Gems." };
export default function ContactPage() { return <div className="contact-page"><header className="page-hero"><h1>Come say <em>hello.</em></h1><p>Questions or ideas? Send a note through your email app.</p></header><section className="contact-layout section-pad"><div className="contact-aside"><h2>Let’s connect</h2><p>We’d love to hear what you’re looking for.</p><div><Mail aria-hidden="true"/><span><b>Email</b>{contactEmail}</span></div><div><Facebook aria-hidden="true"/><span><b>Social</b>Find Generational Gems on Facebook</span></div><div><HeartHandshake aria-hidden="true"/><span><b>Orders</b>Availability confirmed by email</span></div></div><InquiryForm/></section></div>; }
