import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/header.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Homepage from './components/homepage.js';
import Topmover from './components/topmover.js';
import Localmover from './components/localmover.js';
import Resource from './components/resource.js';
import Categoryshowpage from './components/categoryshowpage.js';
import Blogshow from './components/blogshow.js';
import About from './components/about.js';

const blogs =
  [
    {
      id: 1,
      author: "Wajahat",
      title: "New Home Essentials Checklist",
      story: "new-home-essentials-checklist",
      description: "erwtwert qewtrrwet  weateryt awrwtwt wawrttery watrewyery awtewrtyery wrteryet awrteryey dfghdhg ccxvbnc dbxvcbncbncvbndhgdfgjfddyey",
      companylogo: "https://movingscamstories.com/story-feature-images/worst-experience-at-dumbo-moving-and-storage.webp",
      companyname: "internation van lines",
      blogimage: "https://mygoodmovers.com/posts/image/new-home-essentials-checklist.jpg",
      blogtime: "2024-09-29T00:00:00Z",
    },
    {
      id: 2,
      author: "Sir Zeekash",
      title: "Vehicle Storage – Everything You Need To Know",
      story: "vehicle-storage–everything-you-need-to-know",
      description: "erwtwert qewtrrwet  weateryt awrwtwt wawrttery watrewyery awtewrtyery wrteryet awrteryey dfghdhg ccxvbnc dbxvcbncbncvbndhgdfgjfddyey",
      companylogo: "https://mygoodmovers.com/companies/logo/safeway-moving-inc.webp",
      companyname: "safeway Inc.",
      blogimage: "https://mygoodmovers.com/posts/image/vehicle-storage-everything-you-need-to-know.jpg",
      blogtime: "2024-10-19T00:00:00Z",
    },
    {
      id: 3,
      author: "Sir Usama",
      title: "Things to Know Before Moving to Idaho",
      story: "things-to-know-before-moving-to-idaho",
      description: "erwtwert qewtrrwet  weateryt awrwtwt wawrttery watrewyery awtewrtyery wrteryet awrteryey dfghdhg ccxvbnc dbxvcbncbncvbndhgdfgjfddyey",
      companylogo: "https://mygoodmovers.com/companies/logo/blvd-moving.webp",
      companyname: "Blvd Moving Inc",
      blogimage: "https://mygoodmovers.com/posts/image/things-to-know-before-moving-to-idaho.jpg",
      blogtime: "2024-10-20T00:00:00Z",
    },
    {
      id: 4,
      author: "Mohsin",
      title: "What Can You Fit in a 10x10 Storage Unit",
      story: 'what-can-you-fit-in-a-10x10-storage-unit',
      description: "erwtwert qewtrrwet  weateryt awrwtwt wawrttery watrewyery awtewrtyery wrteryet awrteryey dfghdhg ccxvbnc dbxvcbncbncvbndhgdfgjfddyey",
      companylogo: "https://mygoodmovers.com/companies/logo/dumbo-moving-and-storage.jpg",
      companyname: "Dumbo Moving Company",
      blogimage: "https://mygoodmovers.com/posts/image/what-can-you-fit-in-a-10x10-storage-unit.jpg",
      blogtime: "2024-10-17sT00:00:00Z",
    },
    {
      id: 5,
      author: "Ali Hassan",
      title: "Best Places to Live In Oregon",
      story: 'Best-places-to-live-in-oregon',
      description: "erwtwert qewtrrwet  weateryt awrwtwt wawrttery watrewyery awtewrtyery wrteryet awrteryey dfghdhg ccxvbnc dbxvcbncbncvbndhgdfgjfddyey",
      companylogo: "https://mygoodmovers.com/companies/logo/blue-diamond-movers-llc.webp",
      companyname: "Diamond Movers LLC",
      blogimage: "https://mygoodmovers.com/posts/image/best-places-to-live-in-oregon.jpg",
      blogtime: "2024-10-17sT00:00:00Z",
    },
  ]
const popularBlogs = [
  {
    id: 1,
    title: 'How to Move Smartly',
    slug: "how-to-move-smartly",
    image: 'https://movingscamstories.com/blog-feature-images/how-to-verify-a-moving-company.jpeg',
    publishedBy: 'Author 2',
    created_at: '2023-09-05',
    body: "Far far away, behind the word mountains,"

  },
  {
    id: 2,
    title: 'Move Smartly',
    slug: "move-smartly",
    image: 'https://movingscamstories.com/story-feature-images/worst-experience-at-dumbo-moving-and-storage.webp',
    publishedBy: 'Author 3',
    created_at: '2023-09-05',
    body: "Far far away, behind the word mountains,"
  },
  {
    id: 3,
    title: 'Move to Smartly',
    slug: "move-to-smartly",
    image: 'https://movingscamstories.com/story-feature-images/bad-experience-with-international-van-lines.jpeg',
    publishedBy: 'Author 3',
    created_at: '2023-09-05',
    body: "ntries Vokalia and Consonantia, there live the blind texts."

  },
];

const moverinState = [
  {
    id: 1,
    moversnumber: '125',
    statename: "Florida",
  },
  {
    id: 2,
    moversnumber: '45',
    statename: "Miami",
  },
  {
    id: 3,
    moversnumber: '78',
    statename: "Maryland",
  },
  {
    id: 4,
    moversnumber: '108',
    statename: "Arizona",
  },
  {
    id: 5,
    moversnumber: '343',
    statename: "New York",
  },
  {
    id: 6,
    moversnumber: '98',
    statename: "New Jersey",
  },
]
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage blogs={blogs} popularBlogs={popularBlogs} moverinState={moverinState} />} />
        <Route path="blogshow/:story" element={<Blogshow blogs={blogs} popularBlogs={popularBlogs} moverinState={moverinState} />} />
        <Route path="/top-mover" element={<Topmover />} />
        <Route path="/local-mover" element={<Localmover />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/categoryshow" element={<Categoryshowpage blogs={blogs} popularBlogs={popularBlogs} moverinState={moverinState} />} />
        <Route path="/blogshow" element={<Blogshow blogs={blogs} />} />
        <Route path="/blogshow" element={<Blogshow blogs={blogs} />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
