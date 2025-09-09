export default function TrustBar(){
  const items = [
    {emoji:"🛡️", text:"Licensed & Insured"},
    {emoji:"🏆", text:"BBB-Accredited"},
    {emoji:"🌿", text:"Bee-conscious approach"},
    {emoji:"📍", text:"South KC — KS & MO"}
  ];
  return (
    <div className="container-xl mt-6 grid sm:grid-cols-4 gap-3">
      {items.map((i,idx)=>(
        <div key={idx} className="pill">
          <span>{i.emoji}</span><span>{i.text}</span>
        </div>
      ))}
    </div>
  );
}

