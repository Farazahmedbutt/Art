import eth from "./img/eth.svg";
import { FaEthereum } from "react-icons/fa";
const data = [
  {
    id: 1,
    heading: "CURRENT PRICE TO MINT",
    text: "1.512",
    icon: true,
  },
  {
    id: 2,
    heading: "NUMBER OF CONTRIBUTIONS",
    text: "6.29",
  },
  {
    id: 3,
    heading: "TOTAL PAID TO ARTISTS",
    text: "482.328",
    icon: true,
  },
];
const history = [
  {
    id: 628,
    address: "reidjohnson.eth",
    date: "1/13/2022, 10:34:49 AM",
  },
  {
    id: 627,
    address: "reidjohnson.eth",
    date: "1/13/2022, 10:36:49 AM",
  },
  {
    id: 626,
    address: "0x52627Bd8f3326Cab81F9C8d277f50738eC97e5fa",
    date: "1/12/2022, 10:20:52 PM",
  },
  {
    id: 625,
    address: "0x59B9B11C65dF55DBEeb5409f3490774ecf8E7761",
    date: "1/13/2022, 10:10:52 PM",
  },
  {
    id: 624,
    address: "0x82e8fbAf53698d5913BB10e97caf718DA1E4afBF",
    date: "1/15/2022, 13:20:52 PM",
  },
  {
    id: 623,
    address: "0x52627Bd8f3326Cab81F9C8d277f50738eC97e5fa",
    date: "1/12/2022, 10:20:52 PM",
  },
  {
    id: 622,
    address: "0x59B9B11C65dF55DBEeb5409f3490774ecf8E7761",
    date: "1/13/2022, 10:10:52 PM",
  },
  {
    id: 621,
    address: "0x82e8fbAf53698d5913BB10e97caf718DA1E4afBF",
    date: "1/15/2022, 13:20:52 PM",
  },
  {
    id: 620,
    address: "0x52627Bd8f3326Cab81F9C8d277f50738eC97e5fa",
    date: "1/12/2022, 10:20:52 PM",
  },
  {
    id: 619,
    address: "0x59B9B11C65dF55DBEeb5409f3490774ecf8E7761",
    date: "1/13/2022, 10:10:52 PM",
  },
  {
    id: 618,
    address: "0x82e8fbAf53698d5913BB10e97caf718DA1E4afBF",
    date: "1/15/2022, 13:20:52 PM",
  },
];
const FAQ = [
  {
    id: 1,
    question: "What is this thing?",
    answer:
      "An NFT that you mint by making a visual contribution. Each time someone modifies the art, they receive a token, and the art is updated for all other token holders.",
  },
  {
    id: 2,
    question: "How much does it cost to mint?",
    answer:
      "The price to mint increases linearly over time to help prevent vandalism, but the amount paid to mint a new token is divided equally amongst all previous token holders, so each artist is rewarded by each subsequent artist.",
  },
  {
    id: 3,
    question: "Where is the data stored?",
    answer: "The entire NFT is stored on-chain.",
  },
  {
    id: 4,
    question: "Are rewards divided per-token or per-artist?",
    answer:
      "Rewards are divided per-token, so if you make multiple contributions you will receive rewards for each token.",
  },
];
function App() {
  return (
    <div
      className="App bg-gray-100 pb-10
     "
    >
      <div className="md:max-w-6xl max-w-md mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start py-5 md:py-20 ">
          <div className=" grow pt-16 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 text-gray-800 ">
              Welcome to <br /> autonomous art.
            </h1>
            <p className=" text-gray-400">
              Mint an NFT by making a visual contribution to a collective work.
            </p>
          </div>
          <div
            className="bg-white h-3/4 w-full md:h-full md:w-1/2 shadow-sm  grow-0
           "
          >
            <img className="" src={eth} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-0">
          {data.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-md shadow-sm h-full w-full p-5"
            >
              <p className="uppercase text-xs font-medium text-gray-400">
                {d.heading}
              </p>
              <p className="text-gray-800 text-xl font-semibold inline-block">
                {d.text}
              </p>
              <span className="inline-block ml-1">
                {d.icon && <FaEthereum />}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row py-10 gap-8">
          <div className="bg-white md:h-3/4 md:w-3/4 shadow-sm  grow-0 ">
            <img className="" src={eth} alt="" />
          </div>
          <div className="w-full ">
            <h1 className="text-5xl font-semibold mb-5 text-gray-800">
              Explore the history
            </h1>
            <p className=" text-gray-400 text-xl">
              Each contribution combines to form the whole.
            </p>
            <div className="my-5 p-4 bg-white rounded-md shadow-sm">
              <p className="font-semibold">History</p>
              <hr className="my-4" />
              <div className="flex flex-col gap-4 overflow-y-scroll h-[275px] cursor-pointer">
                {history.map((h) => (
                  <div key={h.id} className="flex gap-3">
                    <p className="font-semibold text-gray-500">{h.id}</p>
                    <div className="flex flex-col w-full">
                      <p>{h.address}</p>
                      <p className="text-sm text-gray-400 mb-4">{h.date}</p>
                      <hr className="w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {FAQ.map((f) => (
            <div className="rounded-md shadow-sm bg-white p-4  text-gray-800">
              <p className="font-semibold">{f.question}</p>
              <hr className="my-2" />
              <p className="">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
