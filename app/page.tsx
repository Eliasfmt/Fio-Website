// import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-rose-100">
      {/* <Header /> */}
      <HeroSection />

     <section className="container mx-auto px-4 py-12 text-center">
  <h2 className="text-2xl font-bold text-primary md:text-3xl">Our Programs</h2>
  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    
    {/* First box */}
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-yellow text-2xl font-bold text-primary mx-auto">
        3–5
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary">Full Week Program</h3>
      <p className="text-muted-foreground">
        Monday–Friday, 9:00 AM – 12:30 PM<br />
        $350/month
      </p>
    </div>

    {/* Second box */}
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-blue text-2xl font-bold text-primary mx-auto">
        3–5
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary">Part Week Program</h3>
      <p className="text-muted-foreground">
        Mon/Wed/Fri, 9:00 AM – 12:30 PM<br />
        $210/month
      </p>
    </div>

    {/* Third box */}
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-green text-2xl font-bold text-primary mx-auto">
        4–5
      </div>
      <h3 className="mb-2 text-xl font-bold text-primary">Afternoon Program</h3>
      <p className="text-muted-foreground">
        Tue/Thu, 12:40 PM – 3:40 PM<br />
        $140/month
      </p>
    </div>

  </div>
</section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">Why Choose Us?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Bilingual Environment</h3>
            <p className="text-muted-foreground">
              Children are immersed in both languages daily, learning naturally through play and structured activities.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Qualified Teachers</h3>
            <p className="text-muted-foreground">
              Our teachers are native speakers with degrees in early childhood education.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Small Class Sizes</h3>
            <p className="text-muted-foreground">
              With a 1:6 teacher-to-student ratio, each child receives personalized attention.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-primary">Play-Based Learning</h3>
            <p className="text-muted-foreground">
              Our curriculum emphasizes learning through exploration, creativity, and play.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
