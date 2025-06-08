
export default function StaffPage() {
  return (
    <main className="flex min-h-screen flex-col">
    
      <section className="flex-1 bg-red-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-12 text-center text-4xl font-bold text-orange-600 md:text-5xl">
            Meet the Teachers
          </h1>

          <div className="mx-auto max-w-6xl">
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-x-6 gap-y-12 mb-12">
              {/* Left Column - Combined Image + Contact */}
              
              <div
                className="rounded-2xl p-6 shadow-lg flex flex-col items-center text-center text-gray-900"
                style={{
                    backgroundImage: "url('/images/background1.png')", // replace with your actual path
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(255,255,255,0.85)", // optional blend if needed
                }}
                >
                {/* Teacher Image */}
                <div className="h-72 w-72 mb-6 overflow-hidden rounded-full bg-gray-200 shadow">
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-red-500">
                    <img
                        src="/images/fiorella.JPG"
                        alt="Miss Fiorella"
                        className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-center w-full">
                  <h3 className="mb-2 text-xl font-bold text-red-500">Miss Fiorella</h3>
                  <p className="mb-1 text-gray-800">
                    <span className="font-semibold">Phone:</span> 801-919-9228
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Email:</span> Fiorellalower@gmail.com
                  </p>
                </div>
              </div>

              {/* Right Column - My Favorites */}
              <div
                    className="rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center"
                    style={{
                        backgroundImage: "url('/images/background1.png')",
                        backgroundSize: "cover",           // or "contain" for specific fit
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.85)", // optional blend
                    }}
                    >
                
                  <div className="mb-4 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-red-500">My Favorites:</h3>
                    <div className="ml-4 flex flex-col space-y-1">
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-800 text-center">
                    <p><span className="font-bold">Food:</span> Ceviche/Sushi</p>
                    <p><span className="font-bold">Hobby:</span> Volleyball/Dancing</p>
                    <p><span className="font-bold">Treats:</span> Dark Chocolates</p>
                    <p><span className="font-bold">Drink:</span> Water</p>
                    <p><span className="font-bold">Season:</span> Fall</p>
                    <p><span className="font-bold">Music:</span> Bachata</p>
                    <p><span className="font-bold">Place:</span> Beach</p>
                    <p><span className="font-bold">Color:</span> All</p>
                    <p><span className="font-bold">Animal:</span> Bunnies/Dogs</p>
                  </div>
                </div>
            </div>

            {/* About Me Section - Full Width */}
            <div
                className="w-full rounded-2xl p-8 shadow-lg -mt-4"
                style={{
                    backgroundImage: "url('/images/background1.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.85)", // optional white overlay for text clarity
                }}
                >
              <h3 className="mb-4 text-2xl font-bold text-red-500">About Me:</h3>
              <p className="text-gray-800 leading-relaxed">
                Hi everyone! I'm Fiorella, or Fio for short. It's easier to remember. I grew up in Lima, Peru, I came to the United States 
                when I was 15 years old. As a mother of four amazing children, I understand the importance of a nurturing environment for young 
                learners. I hold an associate's degree in general studies, and I've spent many years working with children, which has given me 
                valuable insights into their world.
                Dance is a huge part of who I am. it's deeply rooted in my culture and something I've enjoyed since childhood. I even continue to 
                take ballet and contemporary classes! My dream of opening a preschool began when I was a teenager, and I'm incredibly excited that
                it's finally coming true. I can't wait to share this year with your children and create a fun, engaging, and trustworthy space 
                for them to learn, grow and most importantly, to have fun.
              </p>
            </div>
          </div>

<hr className="my-8 border-t border-gray-300" />


<div className="mx-auto max-w-6xl">
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-x-6 gap-y-12 mb-12">
              {/* Left Column - Combined Image + Contact */}
              
              <div
                className="rounded-2xl p-6 shadow-lg flex flex-col items-center text-center text-gray-900"
                style={{
                    backgroundImage: "url('/images/background2.png')", // replace with your actual path
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(255,255,255,0.85)", // optional blend if needed
                }}
                >
                {/* Teacher Image */}
                <div className="h-72 w-72 mb-6 overflow-hidden rounded-full bg-gray-200 shadow">
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-red-500">
                    <img
                        src="/images/missma.JPG"
                        alt="Miss Zoraida"
                        className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-center w-full">
                  <h3 className="mb-2 text-xl font-bold text-red-500">Miss Zoraida</h3>
                  <p className="mb-1 text-gray-800">
                    <span className="font-semibold">Phone:</span> 801-919-9228
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Email:</span> Fiorellalower@gmail.com
                  </p>
                </div>
              </div>

              {/* Right Column - My Favorites */}
              <div
                    className="rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center"
                    style={{
                        backgroundImage: "url('/images/background2.png')",
                        backgroundSize: "cover",           // or "contain" for specific fit
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.85)", // optional blend
                    }}
                    >
                
                  <div className="mb-4 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-red-500">My Favorites:</h3>
                    <div className="ml-4 flex flex-col space-y-1">
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-800 text-center">
                    <p><span className="font-bold">Food:</span>  Peruvian/Mexican</p>
                    <p><span className="font-bold">Hobby:</span> Volleyball</p>
                    <p><span className="font-bold">Treats:</span> Chocolates</p>
                    <p><span className="font-bold">Drink:</span> Jamaican water</p>
                    <p><span className="font-bold">Season:</span> Country</p>
                    <p><span className="font-bold">Music:</span> Mariachi</p>
                    <p><span className="font-bold">Place:</span> Beach</p>
                    <p><span className="font-bold">Color:</span> All</p>
                    <p><span className="font-bold">Animal:</span> Bunnies/Dogs</p>
                  </div>
                </div>
            </div>

            {/* About Me Section - Full Width */}
            <div
                className="w-full rounded-2xl p-8 shadow-lg -mt-4"
                style={{
                    backgroundImage: "url('/images/background2.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.85)", // optional white overlay for text clarity
                }}
                >
              <h3 className="mb-4 text-2xl font-bold text-red-500">About Me:</h3>
              <p className="text-gray-800 leading-relaxed">
                I am happy to introduce myself as the director and a teacher at Little Steps and Palabras Preschool. 
                Originally from Lima, Peru, I hold a Bachelor's degree in  Education as a teacher, specializing in Mathematics. 
                I bring over 25 years of teaching experience, having taught both elementary and high school students in Peru.

                Upon arriving in the United States, my passion for education continued, leading me to teach younger children for over 25 years.
                I've also had the pleasure of offering Spanish classes at a library in Connecticut, where I received wonderful feedback from students
                who appreciated my engaging teaching style. Additionally, I have extensive experience tutoring students in both Spanish and Math.

                Teaching is truly my greatest passion, and it brings me immense joy. I am incredibly excited to lead and teach at this preschool, 
                especially with our Spanish immersion program. One of my personal joys is continuous learning; I love to study and discover new things.

                Outside of teaching, I am a proud mother of four wonderful children: Elias, Sonia, Fio, and Dino. I also enjoy dancing, grocery shopping, 
                and driving. I am so excited for this year and look forward to meeting all of your beautiful children!
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}