function Stars(){ return <span aria-label="5 stars">★★★★★</span>; }

export default function Reviews(){
  const quotes = [
    {name:"Laura R.", text:"Came same day, very professional, and the wasps are gone. Highly recommend!"},
    {name:"Derek P.", text:"Explained everything and kept my bee-friendly garden safe while treating."},
    {name:"Kim S.", text:"On time, tidy, priced right — and the follow up was excellent."}
  ];
  return (
    <section className="container-xl mt-10">
      <h2 className="text-2xl font-bold text-gradient">What neighbors say</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {quotes.map((q,idx)=>(
          <div key={idx} className="card">
            <p className="text-amber-500"><Stars/></p>
            <p className="mt-2 text-sm text-gray-700">“{q.text}”</p>
            <p className="mt-3 text-sm font-semibold">{q.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

