import React from "react";

const SponsorCard = ({ img }) => {
  return (
    <>
      <span className="mx-8 flex justify-center items-center md:w-[200px] md:h-[200px] h-[100px] w-[100px] min-w-100%">
        <div className="min-w-100% rounded overflow-hidden shadow-lg backdrop-blur-sm inline-block bg-white">
          <img className="brightness-75 bg-white" src={img} alt="brand Logo" />
        </div>
      </span>
    </>
  );
};
const SponsorsMedia = () => {
  let ListOfSponsors = [
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ezflynldz6c5e1pnbcw3.webp",
    //   link: "https://google.com"
    // },
    // {
    //   img: 
    //   "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/ghbucwukzav2f63jmqyv.webp",
    //   link: "https://google.com"
    // },
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/ghbucwukzav2f63jmqyv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ezflynldz6c5e1pnbcw3.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/indtdbdyvuqne7jqt8xz.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/oujirgalpbgpkr66aipo.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/f9wchu6pvannqhnxom7z.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708014297/Sponsors_webp/j209kuroisn3hd0scp9y.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/kyvyyi7gjsgheqsjlnzu.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/oafgn40qgljd2ydfts2w.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/zlaq2cgxmphe6u6mnhxl.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/pvxaq7j6hwzpvcwsvrwg.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/d9dkdoowhgdqovyoada2.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ooz63xbjc9jfjp9j0yww.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/gru2nflgjncvm5s7c7rq.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/daklik83d25fpbjhcptm.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/clkhde4wtshuruzn9b0i.webp",
    //repeat
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ezflynldz6c5e1pnbcw3.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/ghbucwukzav2f63jmqyv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003323/Sponsors_webp/indtdbdyvuqne7jqt8xz.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/oujirgalpbgpkr66aipo.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003324/Sponsors_webp/f9wchu6pvannqhnxom7z.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708014297/Sponsors_webp/j209kuroisn3hd0scp9y.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/kyvyyi7gjsgheqsjlnzu.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/oafgn40qgljd2ydfts2w.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/zlaq2cgxmphe6u6mnhxl.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/pvxaq7j6hwzpvcwsvrwg.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/d9dkdoowhgdqovyoada2.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/ooz63xbjc9jfjp9j0yww.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/gru2nflgjncvm5s7c7rq.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/daklik83d25fpbjhcptm.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003322/Sponsors_webp/clkhde4wtshuruzn9b0i.webp",
  ];
  let ListOfMediaPartners = [
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/y2gedmgbptiikgp4auev.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/hpyyofmhvq05bzfkthmi.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/sxeebenslrzkugnafkxv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/mxjvj21hxlj8pr4vpqz0.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/p3tnwcixgvziwxkgtqjy.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708015947/Parteners/om2mwltvomr8tg35ixke.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708017541/Parteners/eoptm6fv7sersqfmxakb.png",/*tgh*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/oenvwavqufn9mnqyqvkd.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/j65lz2mbx2piln7kz2jr.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/fu4otcyc1ijpjcdkvyxy.webp",/*prabhat*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708018109/Parteners/fz8l9u3jmflviqzwyukt.png", /*0unstop*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708018193/Parteners/mgkcx8khmcrtuiihm3aw.png",/*silicon india*/
    //repeat
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/y2gedmgbptiikgp4auev.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/hpyyofmhvq05bzfkthmi.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003437/Parteners/plsqklqh8yhtec6mqpyv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/sxeebenslrzkugnafkxv.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/mxjvj21hxlj8pr4vpqz0.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/p3tnwcixgvziwxkgtqjy.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/wvwcgh8xmxawuypxxugl.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708015947/Parteners/om2mwltvomr8tg35ixke.png",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708017541/Parteners/eoptm6fv7sersqfmxakb.png",/*tgh*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/uft1xsnuzizuxnagbjgk.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/oenvwavqufn9mnqyqvkd.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/j65lz2mbx2piln7kz2jr.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003435/Parteners/plcxyf7gsgtdm4y0awvc.webp",
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708003436/Parteners/fu4otcyc1ijpjcdkvyxy.webp",/*prabhat*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708018109/Parteners/fz8l9u3jmflviqzwyukt.png", /*0unstop*/
    "https://res.cloudinary.com/di40y80dw/image/upload/v1708018193/Parteners/mgkcx8khmcrtuiihm3aw.png",/*silicon india*/


  ];
  return (
    <>
      <div className=" group mt-44">
        <div class="nine">
          <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-8">
            Our Sponsors
          </h1>
        </div>
        <div className="relative flex overflow-x-hidden justify-center items-center">
          <div className="py-12 flex animate-marquee  items-center  whitespace-nowrap ">
            {ListOfSponsors.map((img, index) => (
              <SponsorCard key={`sponsor${index}`} img={img} />
            ))}
          </div>
        </div>
        <div class="nine">
          <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-8">
            Media Partners
          </h1>
        </div>
        <div className="relative flex overflow-x-hidden bg-black">
          <div className="py-12 animate-marquee2 flex items-center whitespace-nowrap ">
            {ListOfMediaPartners.map((img, index) => (
              <SponsorCard key={`media${index}`} img={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsMedia;
