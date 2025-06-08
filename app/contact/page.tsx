export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pastel-yellow flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-primary text-center mb-6">Contact Us</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}