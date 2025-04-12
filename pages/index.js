
export default function Home() {
  const matches = [
    { id: 1, teams: "KKR vs RCB - Mar 22", link: "https://www.iplt20.com/video/58794/ipl-2025-m01-kkr-vs-rcb---match-highlights?tagNames=2025" },
  { id: 2, teams: "SRH vs RR - Mar 23", link: "https://www.iplt20.com/video/58864/ipl-2025-m02-srh-vs-rr---match-highlights?tagNames=2025" },
  { id: 3, teams: "CSK vs MI - Mar 23", link: "https://www.iplt20.com/video/58946/ipl-2025-m03-csk-vs-mi---match-highlights?tagNames=2025" },
  { id: 4, teams: "DC vs LSG - Mar 24", link: "https://www.iplt20.com/video/59037/ipl-2025-m04-dc-vs-lsg---match-highlights?tagNames=2025" },
  { id: 5, teams: "GT vs PK - Mar 25", link: "https://www.iplt20.com/video/59134/ipl-2025-m05-gt-vs-pbks---match-highlights?tagNames=2025" },
  { id: 6, teams: "RR vs KKR - Mar 26", link: "https://www.iplt20.com/video/59213/ipl-2025-m06-rr-vs-kkr---match-highlights?tagNames=2025" },
  { id: 7, teams: "SRH vs LSG - Mar 27", link: "https://www.iplt20.com/video/59293/ipl-2025-m07-srh-vs-lsg---match-highlights?tagNames=2025" },
  { id: 8, teams: "CSK vs RCB - Mar 28", link: "https://www.iplt20.com/video/59365/ipl-2025-m08-csk-vs-rcb---match-highlights?tagNames=2025" },
  { id: 9, teams: "GT vs MI - Mar 29", link: "https://www.iplt20.com/video/59437/ipl-2025-m09-gt-vs-mi---match-highlights?tagNames=2025" },
  { id: 10, teams: "DC vs SRH - Mar 30", link: "https://www.iplt20.com/video/59506/ipl-2025-m10-dc-vs-srh---match-highlights?tagNames=2025" },
  { id: 11, teams: "RR vs CSK - Mar 30", link: "https://www.iplt20.com/video/59877/ipl-2025-m15-kkr-vs-srh---match-highlights?tagNames=2025" },
  { id: 12, teams: "MI vs KKR - Mar 31", link: "https://www.iplt20.com/video/59648/ipl-2025-m12-mi-vs-kkr---match-highlights?tagNames=ipl-2025" },
  { id: 13, teams: "LSG vs PK - Apr 01", link: "https://www.iplt20.com/video/59722/ipl-2025-m13-lsg-vs-pbks---match-highlights?tagNames=2025" },
  { id: 14, teams: "RCB vs GT - Apr 02", link: "https://www.iplt20.com/video/59801/ipl-2025-m14-rcb-vs-gt---match-highlights?tagNames=2025" },
  { id: 15, teams: "KKR vs SRH - Apr 03", link: "https://www.iplt20.com/video/59877/ipl-2025-m15-kkr-vs-srh---match-highlights?tagNames=2025" },
  { id: 16, teams: "LSG vs MI - Apr 04", link: "https://www.iplt20.com/video/59948/ipl-2025-m16-lsg-vs-mi---match-highlights?tagNames=2025" },
  { id: 17, teams: "CSK vs DC - Apr 05", link: "https://www.iplt20.com/video/60005/ipl-2025-m17-csk-vs-dc---match-highlights?tagNames=2025" },
  { id: 18, teams: "PK vs RR - Apr 06", link: "https://www.iplt20.com/video/60061/ipl-2025-m18-pbks-vs-rr---match-highlights?tagNames=2025" },
  { id: 19, teams: "SRH vs GT - Apr 07", link: "https://www.iplt20.com/video/60122/ipl-2025-m20-srh-vs-gt---match-highlights?tagNames=2025" },
  { id: 20, teams: "MI vs RCB - Apr 08", link: "https://www.iplt20.com/video/60193/ipl-2025-m21-mi-vs-rcb---match-highlights?tagNames=2025" },
  { id: 21, teams: "KKR vs LSG - Apr 09", link: "https://www.iplt20.com/video/60275/ipl-2025-m19-kkr-vs-lsg---match-highlights?tagNames=2025" },
  { id: 22, teams: "PK vs CSK - Apr 09", link: "https://www.iplt20.com/video/60353/ipl-2025-m22-pbks-vs-csk---match-highlights?tagNames=2025" },
  { id: 23, teams: "GT vs RR - Apr 09", link: "https://www.iplt20.com/video/60422/ipl-2025-m23-gt-vs-rr---match-highlights?tagNames=2025" },
  { id: 24, teams: "RCB vs DC - Apr 10", link: "https://www.iplt20.com/video/60500/ipl-2025-m24-rcb-vs-dc---match-highlights?tagNames=2025" },
  { id: 25, teams: "CSK vs KKR - Apr 11", link: "https://www.iplt20.com/video/60556/ipl-2025-m25-csk-vs-kkr---match-highlights?tagNames=2025" },
  { id: 26, teams: "LSG vs GT - Apr 12", link: "https://www.iplt20.com/video/60615/ipl-2025-m26-lsg-vs-gt---match-highlights?tagNames=2025" },
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
            <div className="flex flex-col items-end">
  <a
    href={match.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    Watch Highlights
  </a>
  <p className="text-sm text-gray-500 mt-1 italic">Tip: Skip the first second to avoid spoilers.</p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}
