
export default function Home() {
  const matches = [
    { id: 1, teams: "CSK vs MI", link: "https://www.iplt20.com/video/625347/match-25-csk-vs-mi-highlights" },
    { id: 2, teams: "RCB vs RR", link: "https://www.iplt20.com/video/625330/match-24-rcb-vs-rr-highlights" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Spoiler-Free IPL Highlights</h1>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {matches.map(match => (
          <div key={match.id} className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <span className="text-lg font-medium">{match.teams}</span>
            <a href={match.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Watch Highlights
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
