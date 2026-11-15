import Link from "next/link";
export default function NotFound() { return <div className="not-found"><p className="script">This shelf is empty</p><h1>We couldn’t find that page.</h1><p>The treasure you’re looking for may have moved.</p><Link className="button button-primary" href="/">Return home</Link></div>; }
