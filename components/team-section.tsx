export default function TeamSection() {
  const teamMembers = [
    {
      image: "/construction-worker-in-white-hard-hat-and-orange-s.jpg",
      name: "Ethan Welch",
      role: "UX Designer",
    },
    {
      image: "/construction-worker-in-orange-hard-hat-and-plaid-s.jpg",
      name: "Ethan Welch",
      role: "UX Designer",
    },
    {
      image: "/construction-worker-in-red-hard-hat-and-orange-saf.jpg",
      name: "Ethan Welch",
      role: "UX Designer",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-slate-900 mb-16">OUR TEAM</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <div className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-2">{member.role}</div>
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
