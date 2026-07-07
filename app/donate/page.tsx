import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DonationCard } from "@/components/donate/DonationCard";

// Donate page — uses Header(simple variant) as-is, not modified.
export default function DonatePage() {
  return (
    <>
      <main>
        <Header variant="simple" />
        <section className="bg-lavender-50">
          <div className="max-w-content mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
            <div className="max-w-xl text-center mb-10">
              <h1 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-2">
                Donate
              </h1>
              <p className="font-body text-muted">
                Support one of Jeeva Jyothi&apos;s ongoing causes.
              </p>
            </div>
            <DonationCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
