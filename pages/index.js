
export default function Home() {
  const matches = [
    { id: 1, teams: "KKR vs RCB - Mar 22", link: "https://www.iplt20.com/video/58946/ipl-2025-m01-kkr-vs-rcb---match-highlights" },
  { id: 2, teams: "SRH vs RR - Mar 23", link: "https://www.iplt20.com/video/58946/ipl-2025-m02-srh-vs-rr---match-highlights" },
  { id: 3, teams: "CSK vs MI - Mar 23", link: "https://www.iplt20.com/video/58946/ipl-2025-m03-csk-vs-mi---match-highlights" },
  { id: 4, teams: "DC vs LSG - Mar 24", link: "https://www.iplt20.com/video/58946/ipl-2025-m04-dc-vs-lsg---match-highlights" },
  { id: 5, teams: "GT vs PK - Mar 25", link: "https://www.iplt20.com/video/58946/ipl-2025-m05-gt-vs-pk---match-highlights" },
  { id: 6, teams: "RR vs KKR - Mar 26", link: "https://www.iplt20.com/video/58946/ipl-2025-m06-rr-vs-kkr---match-highlights" },
  { id: 7, teams: "SRH vs LSG - Mar 27", link: "https://www.iplt20.com/video/58946/ipl-2025-m07-srh-vs-lsg---match-highlights" },
  { id: 8, teams: "CSK vs RCB - Mar 28", link: "https://www.iplt20.com/video/58946/ipl-2025-m08-csk-vs-rcb---match-highlights" },
  { id: 9, teams: "GT vs MI - Mar 29", link: "https://www.iplt20.com/video/58946/ipl-2025-m09-gt-vs-mi---match-highlights" },
  { id: 10, teams: "DC vs SRH - Mar 30", link: "https://www.iplt20.com/video/58946/ipl-2025-m10-dc-vs-srh---match-highlights" },
  { id: 11, teams: "RR vs CSK - Mar 30", link: "https://www.iplt20.com/video/58946/ipl-2025-m11-rr-vs-csk---match-highlights" },
  { id: 12, teams: "MI vs KKR - Mar 31", link: "https://www.iplt20.com/video/58946/ipl-2025-m12-mi-vs-kkr---match-highlights" },
  { id: 13, teams: "LSG vs PK - Apr 01", link: "https://www.iplt20.com/video/58946/ipl-2025-m13-lsg-vs-pk---match-highlights" },
  { id: 14, teams: "RCB vs GT - Apr 02", link: "https://www.iplt20.com/video/58946/ipl-2025-m14-rcb-vs-gt---match-highlights" },
  { id: 15, teams: "KKR vs SRH - Apr 03", link: "https://www.iplt20.com/video/58946/ipl-2025-m15-kkr-vs-srh---match-highlights" },
  { id: 16, teams: "LSG vs MI - Apr 04", link: "https://www.iplt20.com/video/58946/ipl-2025-m16-lsg-vs-mi---match-highlights" },
  { id: 17, teams: "CSK vs DC - Apr 05", link: "https://www.iplt20.com/video/58946/ipl-2025-m17-csk-vs-dc---match-highlights" },
  { id: 18, teams: "PK vs RR - Apr 06", link: "https://www.iplt20.com/video/58946/ipl-2025-m18-pk-vs-rr---match-highlights" },
  { id: 19, teams: "SRH vs GT - Apr 07", link: "https://www.iplt20.com/video/58946/ipl-2025-m19-srh-vs-gt---match-highlights" },
  { id: 20, teams: "MI vs RCB - Apr 08", link: "https://www.iplt20.com/video/58946/ipl-2025-m20-mi-vs-rcb---match-highlights" },
  { id: 21, teams: "KKR vs LSG - Apr 09", link: "https://www.iplt20.com/video/58946/ipl-2025-m21-kkr-vs-lsg---match-highlights" },
  { id: 22, teams: "PK vs CSK - Apr 09", link: "https://www.iplt20.com/video/58946/ipl-2025-m22-pk-vs-csk---match-highlights" },
  { id: 23, teams: "GT vs RR - Apr 09", link: "https://www.iplt20.com/video/58946/ipl-2025-m23-gt-vs-rr---match-highlights" },
  { id: 24, teams: "RCB vs DC - Apr 10", link: "https://www.iplt20.com/video/58946/ipl-2025-m24-rcb-vs-dc---match-highlights" },
  { id: 25, teams: "CSK vs KKR - Apr 11", link: "https://www.iplt20.com/video/58946/ipl-2025-m25-csk-vs-kkr---match-highlights" },
  { id: 26, teams: "LSG vs GT - Apr 12", link: "https://www.iplt20.com/video/58946/ipl-2025-m26-lsg-vs-gt---match-highlights" },
  { id: 27, teams: "SRH vs PK - Apr 12", link: "https://www.iplt20.com/video/58946/ipl-2025-m27-srh-vs-pk---match-highlights" },
  { id: 28, teams: "RR vs RCB - Apr 13", link: "https://www.iplt20.com/video/58946/ipl-2025-m28-rr-vs-rcb---match-highlights" },
  { id: 29, teams: "DC vs MI - Apr 13", link: "https://www.iplt20.com/video/58946/ipl-2025-m29-dc-vs-mi---match-highlights" },
  { id: 30, teams: "LSG vs CSK - Apr 14", link: "https://www.iplt20.com/video/58946/ipl-2025-m30-lsg-vs-csk---match-highlights" },
  { id: 31, teams: "PK vs KKR - Apr 15", link: "https://www.iplt20.com/video/58946/ipl-2025-m31-pk-vs-kkr---match-highlights" },
  { id: 32, teams: "DC vs RR - Apr 16", link: "https://www.iplt20.com/video/58946/ipl-2025-m32-dc-vs-rr---match-highlights" },
  { id: 33, teams: "MI vs SRH - Apr 17", link: "https://www.iplt20.com/video/58946/ipl-2025-m33-mi-vs-srh---match-highlights" },
  { id: 34, teams: "RCB vs PK - Apr 18", link: "https://www.iplt20.com/video/58946/ipl-2025-m34-rcb-vs-pk---match-highlights" },
  { id: 35, teams: "GT vs DC - Apr 19", link: "https://www.iplt20.com/video/58946/ipl-2025-m35-gt-vs-dc---match-highlights" },
  { id: 36, teams: "RR vs LSG - Apr 19", link: "https://www.iplt20.com/video/58946/ipl-2025-m36-rr-vs-lsg---match-highlights" },
  { id: 37, teams: "PK vs RCB - Apr 20", link: "https://www.iplt20.com/video/58946/ipl-2025-m37-pk-vs-rcb---match-highlights" },
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
