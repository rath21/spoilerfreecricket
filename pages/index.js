import { useState } from "react";

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState(""); // State to track the selected team

  const matches = [
   { id: 1, date: "Mar 22, 2025", teams: "KKR vs RCB", link: "https://www.iplt20.com/video/58794/ipl-2025-m01-kkr-vs-rcb---match-highlights?tagNames=2025" },
    { id: 2, date: "Mar 23, 2025", teams: "SRH vs RR", link: "https://www.iplt20.com/video/58864/ipl-2025-m02-srh-vs-rr---match-highlights?tagNames=2025" },
    { id: 3, date: "Mar 23, 2025", teams: "CSK vs MI", link: "https://www.iplt20.com/video/58946/ipl-2025-m03-csk-vs-mi---match-highlights?tagNames=2025" },
    { id: 4, date: "Mar 24, 2025", teams: "DC vs LSG", link: "https://www.iplt20.com/video/59037/ipl-2025-m04-dc-vs-lsg---match-highlights?tagNames=2025" },
    { id: 5, date: "Mar 25, 2025", teams: "GT vs PK", link: "https://www.iplt20.com/video/59134/ipl-2025-m05-gt-vs-pbks---match-highlights?tagNames=2025" },
    { id: 6, date: "Mar 26, 2025", teams: "RR vs KKR", link: "https://www.iplt20.com/video/59213/ipl-2025-m06-rr-vs-kkr---match-highlights?tagNames=2025" },
    { id: 7, date: "Mar 27, 2025", teams: "SRH vs LSG", link: "https://www.iplt20.com/video/59293/ipl-2025-m07-srh-vs-lsg---match-highlights?tagNames=2025" },
    { id: 8, date: "Mar 28, 2025", teams: "CSK vs RCB", link: "https://www.iplt20.com/video/59365/ipl-2025-m08-csk-vs-rcb---match-highlights?tagNames=2025" },
    { id: 9, date: "Mar 29, 2025", teams: "GT vs MI", link: "https://www.iplt20.com/video/59437/ipl-2025-m09-gt-vs-mi---match-highlights?tagNames=2025" },
    { id: 10, date: "Mar 30, 2025", teams: "DC vs SRH", link: "https://www.iplt20.com/video/59506/ipl-2025-m10-dc-vs-srh---match-highlights?tagNames=2025" },
    { id: 11, date: "Mar 30, 2025", teams: "RR vs CSK", link: "https://www.iplt20.com/video/59877/ipl-2025-m15-kkr-vs-srh---match-highlights?tagNames=2025" },
    { id: 12, date: "Mar 31, 2025", teams: "MI vs KKR", link: "https://www.iplt20.com/video/59648/ipl-2025-m12-mi-vs-kkr---match-highlights?tagNames=ipl-2025" },
    { id: 13, date: "Apr 01, 2025", teams: "LSG vs PK", link: "https://www.iplt20.com/video/59722/ipl-2025-m13-lsg-vs-pbks---match-highlights?tagNames=2025" },
    { id: 14, date: "Apr 02, 2025", teams: "RCB vs GT", link: "https://www.iplt20.com/video/59801/ipl-2025-m14-rcb-vs-gt---match-highlights?tagNames=2025" },
    { id: 15, date: "Apr 03, 2025", teams: "KKR vs SRH", link: "https://www.iplt20.com/video/59877/ipl-2025-m15-kkr-vs-srh---match-highlights?tagNames=2025" },
    { id: 16, date: "Apr 04, 2025", teams: "LSG vs MI", link: "https://www.iplt20.com/video/59948/ipl-2025-m16-lsg-vs-mi---match-highlights?tagNames=2025" },
    { id: 17, date: "Apr 05, 2025", teams: "CSK vs DC", link: "https://www.iplt20.com/video/60005/ipl-2025-m17-csk-vs-dc---match-highlights?tagNames=2025" },
    { id: 18, date: "Apr 06, 2025", teams: "PK vs RR", link: "https://www.iplt20.com/video/60061/ipl-2025-m18-pbks-vs-rr---match-highlights?tagNames=2025" },
    { id: 19, date: "Apr 07, 2025", teams: "SRH vs GT", link: "https://www.iplt20.com/video/60122/ipl-2025-m20-srh-vs-gt---match-highlights?tagNames=2025" },
    { id: 20, date: "Apr 08, 2025", teams: "MI vs RCB", link: "https://www.iplt20.com/video/60193/ipl-2025-m21-mi-vs-rcb---match-highlights?tagNames=2025" },
    { id: 21, date: "Apr 09, 2025", teams: "KKR vs LSG", link: "https://www.iplt20.com/video/60275/ipl-2025-m19-kkr-vs-lsg---match-highlights?tagNames=2025" },
    { id: 22, date: "Apr 09, 2025", teams: "PK vs CSK", link: "https://www.iplt20.com/video/60353/ipl-2025-m22-pbks-vs-csk---match-highlights?tagNames=2025" },
    { id: 23, date: "Apr 09, 2025", teams: "GT vs RR", link: "https://www.iplt20.com/video/60422/ipl-2025-m23-gt-vs-rr---match-highlights?tagNames=2025" },
    { id: 24, date: "Apr 10, 2025", teams: "RCB vs DC", link: "https://www.iplt20.com/video/60500/ipl-2025-m24-rcb-vs-dc---match-highlights?tagNames=2025" },
    { id: 25, date: "Apr 11, 2025", teams: "CSK vs KKR", link: "https://www.iplt20.com/video/60556/ipl-2025-m25-csk-vs-kkr---match-highlights?tagNames=2025" },
    { id: 26, date: "Apr 12, 2025", teams: "LSG vs GT", link: "https://www.iplt20.com/video/60615/ipl-2025-m26-lsg-vs-gt---match-highlights?tagNames=2025" },
    { id: 27, date: "Apr 12, 2025", teams: "SRH vs PK", link: "https://www.iplt20.com/videos/highlights" },
    { id: 28, date: "Apr 13, 2025", teams: "RR vs RCB", link: "https://www.iplt20.com/videos/highlights" },
    { id: 29, date: "Apr 13, 2025", teams: "DC vs MI", link: "https://www.iplt20.com/videos/highlights" },
    { id: 30, date: "Apr 14, 2025", teams: "LSG vs CSK", link: "https://www.iplt20.com/videos/highlights" },
    { id: 31, date: "Apr 15, 2025", teams: "PK vs KKR", link: "https://www.iplt20.com/videos/highlights" },
    { id: 32, date: "Apr 16, 2025", teams: "DC vs RR", link: "https://www.iplt20.com/videos/highlights" },
    { id: 33, date: "Apr 17, 2025", teams: "MI vs SRH", link: "https://www.iplt20.com/videos/highlights" },
    { id: 34, date: "Apr 18, 2025", teams: "RCB vs PK", link: "https://www.iplt20.com/videos/highlights" },
    { id: 35, date: "Apr 19, 2025", teams: "GT vs DC", link: "https://www.iplt20.com/videos/highlights" },
    { id: 36, date: "Apr 19, 2025", teams: "RR vs LSG", link: "https://www.iplt20.com/videos/highlights" },
    { id: 37, date: "Apr 20, 2025", teams: "PK vs RCB", link: "https://www.iplt20.com/videos/highlights" },
  ];

  // Filter matches based on selected team
  const filteredMatches = selectedTeam
    ? matches.filter(match => match.teams.includes(selectedTeam))
    : matches;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Spoiler-Free IPL Highlights</h1>

      {/* Dropdown filter */}
      <div className="mb-6 text-center">
        <select
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">Select a Team</option>
          <option value="KKR">KKR</option>
          <option value="RCB">RCB</option>
          <option value="SRH">SRH</option>
          <option value="RR">RR</option>
          <option value="CSK">CSK</option>
          <option value="MI">MI</option>
          <option value="GT">GT</option>
          <option value="DC">DC</option>
          <option value="LSG">LSG</option>
          <option value="PK">PK</option>
        </select>
      </div>

      {/* Match list */}
      <div className="grid gap-6 max-w-3xl mx-auto">
        {filteredMatches.map(match => (
          <div key={match.id} className="bg-white rounded-xl shadow p-4 flex justify-between items-center mb-6">
            {/* Match info row */}
            <div className="flex justify-between w-full">
              <div className="flex-1 text-sm text-gray-500">{match.date}</div>
              <div className="flex-2 text-lg font-medium text-center">{match.teams}</div>
              <div className="flex-1 text-right">
                <a
                  href={match.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Watch Highlights
                </a>
              </div>
            </div>

            {/* Spoiler text */}
            <div className="text-sm text-gray-500 text-center mt-2 italic">
              Click & close eyes for 1 sec to avoid spoilers
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
