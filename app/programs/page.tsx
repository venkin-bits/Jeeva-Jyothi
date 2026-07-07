import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ProgramsPage() {
  return (
    <>
      <main>
        <Header variant="simple" />
        
        {/* Programs Hero */}
        <section className="bg-cream py-16 md:py-24">
          <div className="max-w-content mx-auto px-4">
            <h1 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-4">
              Our Programs
            </h1>
            <p className="font-body text-lg text-muted max-w-2xl">
              Jeeva Jyothi works across five program pillars to support marginalized communities in Chennai and surrounding areas.
            </p>
          </div>
        </section>

        {/* Children Program */}
        <section className="py-16 md:py-20 bg-lavender-50">
          <div className="max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Children
                </h2>
                <p className="font-body text-muted mb-4">
                  Supplementary Education centers provide academic support to children from economically weaker backgrounds. Day Care Centres offer safe spaces for children while parents work. Shelter Homes provide care and protection for children in difficult circumstances. SRHR and Adolescent Health programs address reproductive health education and awareness.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg border border-violet-300/40">
                <p className="font-display font-semibold text-3xl text-violet-700 mb-2">
                  5
                </p>
                <p className="font-body text-sm text-muted">
                  Supplementary Education centers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Women Program */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Women
                </h2>
                <p className="font-body text-muted mb-4">
                  Self-Help Group formation empowers women through collective savings and micro-enterprise. Programs facilitate access to government schemes and welfare benefits. Financial literacy and entrepreneurship training build economic independence.
                </p>
              </div>
              <div className="bg-lavender-100 p-6 rounded-lg border border-violet-300/40">
                <p className="font-display font-semibold text-3xl text-violet-700 mb-2">
                  450+
                </p>
                <p className="font-body text-sm text-muted">
                  Self-Help Groups supported
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Program */}
        <section className="py-16 md:py-20 bg-lavender-50">
          <div className="max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Environment
                </h2>
                <p className="font-body text-muted mb-4">
                  School tree-plantation awareness programs educate students on environmental conservation. Mangrove restoration efforts in Pulicat protect coastal ecosystems and biodiversity.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg border border-violet-300/40">
                <p className="font-display font-semibold text-3xl text-violet-700 mb-2">
                  950
                </p>
                <p className="font-body text-sm text-muted">
                  Mangrove saplings planted (Pulicat)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disability Program */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Disability
                </h2>
                <p className="font-body text-muted mb-4">
                  Community-Based Rehabilitation (CBR) provides support and services to differently-abled individuals within their communities. Programs assist with government welfare scheme registration to access benefits. Livelihood support enables economic independence.
                </p>
              </div>
              <div className="bg-lavender-100 p-6 rounded-lg border border-violet-300/40">
                <p className="font-display font-semibold text-3xl text-violet-700 mb-2">
                  ~55
                </p>
                <p className="font-body text-sm text-muted">
                  Children in DCC care currently
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unorganized Labor Program */}
        <section className="py-16 md:py-20 bg-lavender-50">
          <div className="max-w-content mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-display font-semibold text-2xl text-ink mb-4">
                  Unorganized Labor
                </h2>
                <p className="font-body text-muted mb-4">
                  Welfare Board registration assistance helps unorganized workers access social security benefits. Awareness campaigns inform workers of their rights and entitlements. Eligibility support provided for workers aged 18-60 to access government schemes.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg border border-violet-300/40">
                <p className="font-display font-semibold text-3xl text-violet-700 mb-2">
                  1,500+
                </p>
                <p className="font-body text-sm text-muted">
                  Workers registered
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Stats Callout */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="max-w-content mx-auto px-4">
            <div className="bg-lavender-100 p-8 rounded-lg border border-violet-300/40">
              <h3 className="font-display font-semibold text-xl text-ink mb-6">
                Lifetime Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-display font-semibold text-3xl text-violet-700 mb-2">
                    550+
                  </p>
                  <p className="font-body text-muted">
                    Children touched by shelter homes (lifetime)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
