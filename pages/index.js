
export default function Home() {
  const matches = [
    { id: 1, teams: "KKR vs RCB - Mar 22", link: "https://www.iplt20.com/videos/highlights" },
  { id: 2, teams: "SRH vs RR - Mar 23", link: "https://www.iplt20.com/videos/highlights" },
  { id: 3, teams: "CSK vs MI - Mar 23", link: "https://www.iplt20.com/videos/highlights" },
  { id: 4, teams: "DC vs LSG - Mar 24", link: "https://www.iplt20.com/videos/highlights" },
  { id: 5, teams: "GT vs PK - Mar 25", link: "https://www.iplt20.com/videos/highlights" },
  { id: 6, teams: "RR vs KKR - Mar 26", link: "https://www.iplt20.com/videos/highlights" },
  { id: 7, teams: "SRH vs LSG - Mar 27", link: "https://www.iplt20.com/videos/highlights" },
  { id: 8, teams: "CSK vs RCB - Mar 28", link: "https://www.iplt20.com/videos/highlights" },
  { id: 9, teams: "GT vs MI - Mar 29", link: "https://www.iplt20.com/videos/highlights" },
  { id: 10, teams: "DC vs SRH - Mar 30", link: "https://www.iplt20.com/videos/highlights" },
  { id: 11, teams: "RR vs CSK - Mar 30", link: "https://www.iplt20.com/videos/highlights" },
  { id: 12, teams: "MI vs KKR - Mar 31", link: "https://www.iplt20.com/videos/highlights" },
  { id: 13, teams: "LSG vs PK - Apr 01", link: "https://www.iplt20.com/videos/highlights" },
  { id: 14, teams: "RCB vs GT - Apr 02", link: "https://www.iplt20.com/videos/highlights" },
  { id: 15, teams: "KKR vs SRH - Apr 03", link: "https://www.iplt20.com/videos/highlights" },
  { id: 16, teams: "LSG vs MI - Apr 04", link: "https://www.iplt20.com/videos/highlights" },
  { id: 17, teams: "CSK vs DC - Apr 05", link: "https://www.iplt20.com/videos/highlights" },
  { id: 18, teams: "PK vs RR - Apr 06", link: "https://www.iplt20.com/videos/highlights" },
  { id: 19, teams: "SRH vs GT - Apr 07", link: "https://www.iplt20.com/videos/highlights" },
  { id: 20, teams: "MI vs RCB - Apr 08", link: "https://www.iplt20.com/videos/highlights" },
  { id: 21, teams: "KKR vs LSG - Apr 09", link: "https://www.iplt20.com/videos/highlights" },
  { id: 22, teams: "PK vs CSK - Apr 09", link: "https://www.iplt20.com/videos/highlights" },
  { id: 23, teams: "GT vs RR - Apr 09", link: "https://www.iplt20.com/videos/highlights" },
  { id: 24, teams: "RCB vs DC - Apr 10", link: "https://www.iplt20.com/videos/highlights" },
  { id: 25, teams: "CSK vs KKR - Apr 11", link: "https://www.iplt20.com/videos/highlights" },
  { id: 26, teams: "LSG vs GT - Apr 12", link: "https://www.iplt20.com/videos/highlights" },
  { id: 27, teams: "SRH vs PK - Apr 12", link: "https://www.iplt20.com/videos/highlights" },
  { id: 28, teams: "RR vs RCB - Apr 13", link: "https://www.iplt20.com/videos/highlights" },
  { id: 29, teams: "DC vs MI - Apr 13", link: "https://www.iplt20.com/videos/highlights" },
  { id: 30, teams: "LSG vs CSK - Apr 14", link: "https://www.iplt20.com/videos/highlights" },
  { id: 31, teams: "PK vs KKR - Apr 15", link: "https://www.iplt20.com/videos/highlights" },
  { id: 32, teams: "DC vs RR - Apr 16", link: "https://www.iplt20.com/videos/highlights" },
  { id: 33, teams: "MI vs SRH - Apr 17", link: "https://www.iplt20.com/videos/highlights" },
  { id: 34, teams: "RCB vs PK - Apr 18", link: "https://www.iplt20.com/videos/highlights" },
  { id: 35, teams: "GT vs DC - Apr 19", link: "https://www.iplt20.com/videos/highlights" },
  { id: 36, teams: "RR vs LSG - Apr 19", link: "https://www.iplt20.com/videos/highlights" },
  { id: 37, teams: "PK vs RCB - Apr 20", link: "https://www.iplt20.com/videos/highlights" },
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
