import SongCard from "./songcard";
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);
const activityItems = [
    { id: 1, main: "Arsh Pundir", sub: "Artist", img: "/r/s1.jpg", href: "/artist/nfak" },
    { id: 2, main: "The Bends", sub: "Album . Radiohead", img: "/r/s2.jpg", href: "/album/thebends" },
    { id: 3, main: "Best of NFAK", sub: "Playlist . aksht", img: "/r/s3.jpg", href: "/playlist/nfakbest" },
    { id: 4, main: "Jeff Buckley", sub: "Artist", img: "/r/s4.png", href: "/artist/jeffbuckley" },
    { id: 5, main: "Grace", sub: "Album . Jeff Buckley", img: "/r/s5.jpg", href: "/album/grace" },
    { id: 6, main: "OK computer", sub: "Album . Radiohead", img: "/r/s6.jpg", href: "/album/okcomputer" },
    { id: 7, main: "Sinema", sub: "Album . Peter Cat Rec Company", img: "/r/s7.jpg", href: "/album/sinema" },
    { id: 8, main: "Bismillah", sub: "Album . Peter Cat Recording Company", img: "/r/s8.jpg", href: "/album/bismillah" },
    { id: 9, main: "French Exit", sub: "Album . TV Girl", img: "/r/s9.jpg", href: "/album/frenchexit" },
    { id: 10, main: "Divorced", sub: "Playlist . Akio.", img: "/r/s10.jpg", href: "/playlist/divorced" },
    { id: 11, main: "Jaanam", sub: "Album . Suryakant Sawhney", img: "/r/s11.jpg", href: "/album/jaanam" },
    { id: 12, main: "NeverMind", sub: "Album . Nirvana", img: "/r/s12.png", href: "/album/nevermind" },
    { id: 13, main: "Rockstar", sub: "Album . Mohit Chauhan , A.R Rehman", img: "/r/s.13.jpg", href: "/album/rockstar" }
];


function ActivityTab(){
    return(
<>
<div className="mainleft">
          <div>
            <a className="leftheadtext">Your Activity</a> <br />
            <hr />
          </div>
          <div className="activity-scroll">
            {activityItems.map(item => (
                <SongCard
                    key={item.id}
                    imgSrc={item.img}
                    mainText={item.main}
                    subText={item.sub}
                    linkTo={item.href}
                />
            ))}</div></div>

</>
)

}
export default ActivityTab;