export default function ProgramsPage() {
  return (
   <section className="bg-pink-100 min-h-screen py-20">
      <div className="px-4"> {/* ⬅️ Remove container + mx-auto */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-6">Our Programs</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-primary">Full Week Program</h2>
              <p className="text-muted-foreground mt-2">
                Ages 3–5<br />
                Monday–Friday, 9:00 AM – 12:30 PM<br />
                $350/month
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-primary">Part Week Program</h2>
              <p className="text-muted-foreground mt-2">
                Ages 3–5<br />
                Mon/Wed/Fri, 9:00 AM – 12:30 PM<br />
                $210/month
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-primary">Afternoon Program</h2>
              <p className="text-muted-foreground mt-2">
                Ages 4–5<br />
                Tue/Thu, 12:40 PM – 3:40 PM<br />
                $140/month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}